import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import Toggle from "../../components/UI/Toggle";
import { UserRepository } from "../../../data/repositories/UserRepository";
import { GetDetailsUseCase } from "../../../application/useCases/user/GetDetailsUseCase";
import { UpdateUserUseCase } from "../../../application/useCases/user/UpdateUserUseCase";
import type { GetDetailsResponseDto } from "../../../data/dtos/User/GetDetailsResponseDto";
import { RoleEnum } from "../../../core/enum/RoleEnum";

export default function GetUserDetailsPage() {

    const { userId } = useParams();

    const [details, setDetails] = useState<GetDetailsResponseDto | null>(null);

    const [originalDetails, setOriginalDetails] = useState<GetDetailsResponseDto | null>(null);

    const [selectedRole, setSelectedRole] = useState<RoleEnum | null>(null);

    const [loading, setLoading] = useState(true);

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const loadDetails = async () => {
            try {
                const repository = new UserRepository();

                const useCase = new GetDetailsUseCase(repository);

                const result = await useCase.execute({
                    query: {
                        id: userId!
                    }
                });

                const elevatedRole =
                    result.userRoles?.find(
                        x => x.roleId !== RoleEnum.User
                    )?.roleId as RoleEnum | undefined;

                setSelectedRole(
                    elevatedRole ?? null
                );

                setDetails(result);
                setOriginalDetails(result);
            }
            catch (err) {
                console.error(err);
            }
            finally {
                setLoading(false);
            }
        };
        loadDetails();
    }, [userId]);

    const handleUpdateDetails = async () => {
        if (!details)
            return;

        try {
            const repository = new UserRepository();

            const useCase = new UpdateUserUseCase(repository);

            const userRoles =
                selectedRole
                    ? [
                        {
                            userId: details.id,

                            roleId: selectedRole,

                            roleTitle:
                                selectedRole === RoleEnum.SysAdmin
                                    ? "SysAdmin"
                                    : "Admin"
                        }
                    ]
                    : [];           

            const result = await useCase.execute({
                    command: {
                        id: details.id,

                        name: details.name,

                        lastName: details.lastName,

                        nationalCode: details.nationalCode,

                        birthDate: details.birthDate,

                        email: details.email,

                        phoneNumber: details.phoneNumber,

                        username: details.username,

                        isActive: details.isActive,

                        isBlocked: details.isBlocked,

                        userRoles: userRoles
                    }
                });

            console.log("User Updated", result);

            setOriginalDetails(details);
            setIsEditing(false);
        }
        catch (err) {
            console.error(err);
        }
    };

    if (loading || !details) {

        return (
            <DashboardLayout>
                <div className=" max-w-4xl mx-auto mt-6">
                    <Card title="User Details">
                        Loading...
                    </Card>
                </div>
            </DashboardLayout>
        );
    }
    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto mt-6">
                <Card title="User Details">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <Input label="Name"
                            value={details.name}
                            onChange={(value) =>
                                setDetails({
                                    ...details,
                                    name: value
                                })
                            }
                            disabled={!isEditing}
                        />

                        <Input
                            label="Last Name"
                            value={details.lastName}
                            onChange={(value) =>
                                setDetails({
                                    ...details,
                                    lastName: value
                                })
                            }
                            disabled={!isEditing}
                        />

                        <Input
                            label="Username"
                            value={details.username}
                            onChange={(value) =>
                                setDetails({
                                    ...details,
                                    username: value
                                })
                            }
                            disabled={!isEditing}
                        />

                        <Input
                            label="Email"
                            value={details.email}
                            onChange={(value) =>
                                setDetails({
                                    ...details,
                                    email: value
                                })
                            }
                            disabled={!isEditing}
                        />

                        <Input
                            label="Phone Number"
                            value={details.phoneNumber}
                            onChange={(value) =>
                                setDetails({
                                    ...details,
                                    phoneNumber: value
                                })
                            }
                            disabled={!isEditing}
                        />

                        <Input
                            label="National Code"
                            value={details.nationalCode}
                            onChange={(value) =>
                                setDetails({
                                    ...details,
                                    nationalCode: value
                                })
                            }
                            disabled={!isEditing}
                        />

                        <Input
                            label="Birth Date"
                            value={details.birthDate.substring(0, 10)}
                            onChange={(value) =>
                                setDetails({
                                    ...details,
                                    birthDate: value
                                })
                            }
                            disabled={!isEditing}
                            type="date"
                        />

                    </div>

                    <div
                        className="
                            mt-6
                            flex
                            gap-10
                        "
                    >

                        <Toggle
                            label="Active User"
                            checked={details.isActive}
                            disabled={!isEditing}
                            onChange={(value) =>
                                setDetails({
                                    ...details,
                                    isActive: value
                                })
                            }
                        />

                        <Toggle
                            label="Blocked User"
                            checked={details.isBlocked}
                            disabled={!isEditing}
                            onChange={(value) =>
                                setDetails({
                                    ...details,
                                    isBlocked: value
                                })
                            }
                        />

                    </div>

                    <div className=" mt-8">
                        <h3 className=" font-semibold mb-3">
                            Role
                        </h3>

                        <div className="flex gap-8">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    checked={selectedRole === RoleEnum.Admin}
                                    disabled={!isEditing}
                                    onChange={() =>
                                        setSelectedRole(RoleEnum.Admin)
                                    }
                                />

                                Admin
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="role"
                                    checked={selectedRole === RoleEnum.SysAdmin}
                                    disabled={!isEditing}
                                    onChange={() =>
                                        setSelectedRole(RoleEnum.SysAdmin)
                                    }
                                />

                                SysAdmin
                            </label>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-3">

                        {!isEditing ? (

                            <Button
                                title="Edit User"
                                onClick={() =>
                                    setIsEditing(true)
                                }
                            />

                        ) : (

                            <>

                                <Button
                                    title="Save Changes"
                                    onClick={handleUpdateDetails}
                                />

                                <Button
                                    title="Cancel"
                                    onClick={() => {

                                        setDetails(
                                            originalDetails
                                        );

                                        setIsEditing(
                                            false
                                        );
                                    }}
                                />
                            </>
                        )}
                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
}