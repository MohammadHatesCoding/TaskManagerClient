import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Card from "../../components/UI/Card";
import { UserRepository } from "../../../data/repositories/UserRepository";
import { GetProfileDetails } from "../../../application/useCases/user/GetProfileDetailsUseCase";
import type { GetProfileDetailsResponseDto } from "../../../data/dtos/User/GetProfileDetailsResponseDto";
import Input from  "../../components/UI/Input"
import Button from "../../components/UI/Button"
import { UpdateProfileUseCase } from "../../../application/useCases/user/UpdateProfileUseCase";

export default function ProfilePage() {

    const [profile, setProfile] = useState<GetProfileDetailsResponseDto | null>(null);
    const [originalProfile, setOriginalProfile] = useState<GetProfileDetailsResponseDto | null>(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        
        const loadProfile =
            async () => {

                try {

                    const repository = new UserRepository();

                    const useCase = new GetProfileDetails(repository);

                    const result = await useCase.execute({
                            query: {}
                        });

                    setProfile(result);
                    setOriginalProfile(result);

                }
                catch (err) {

                    console.error(
                        err
                    );

                }
                finally {

                    setLoading(
                        false
                    );

                }

            };

        loadProfile();

    }, []);

        const handleUpdateProfile = async () => {

        if (!profile)
            return;

        try {

            const repository =
                new UserRepository();

            const useCase = new UpdateProfileUseCase(repository);

            const result =
                await useCase.execute({
                    command: {
                        id: profile.id,
                        
                        name: profile.name,

                        lastName: profile.lastName,

                        nationalCode : profile.nationalCode,

                        birthDate : profile.birthDate,

                        email: profile.email,

                        phoneNumber: profile.phoneNumber,

                        username: profile.username
                    }
                });

            console.log(
                "Profile Updated",
                result
            );

            setIsEditing(
                false
            );

        }
        catch (err) {

            console.error(
                err
            );

        }

    };

    if (loading || !profile) {

        return (

            <DashboardLayout>

                <Card title="Profile">

                    Loading...

                </Card>

            </DashboardLayout>

        );

    }

    return (
        <DashboardLayout>

            <div
            className="
                max-w-4xl
                mx-auto
                mt-6
            ">
                <Card title="My Profile">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <Input
                            label="Name"
                            value={profile?.name ?? ""}
                            onChange={(value) => setProfile({...profile, name: value})}
                            disabled = {!isEditing}
                        />

                        <Input
                            label="Last Name"
                            value={profile?.lastName ?? ""}
                            onChange={(value) => setProfile({...profile, lastName: value})}
                            disabled = {!isEditing}
                        />

                        <Input
                            label="Username"
                            value={profile?.username ?? ""}
                            onChange={(value) => setProfile({...profile, username: value})}
                            disabled = {!isEditing}
                        />

                        <Input
                            label="Email"
                            value={profile?.email ?? ""}
                            onChange={(value) => setProfile({...profile, email: value})}
                            disabled = {!isEditing}
                        />

                        <Input
                            label="Phone Number"
                            value={profile?.phoneNumber ?? ""}
                            onChange={(value) => setProfile({...profile, phoneNumber: value})}
                            disabled = {!isEditing}
                        />

                        <Input
                            label="National Code"
                            value={profile?.nationalCode ?? ""}
                            onChange={(value) => setProfile({...profile, nationalCode: value})}
                            disabled = {!isEditing}
                        />

                        <Input
                            label="Birth Date"
                            value={
                                profile?.birthDate.substring(0, 10)
                                    ? new Date(profile.birthDate.substring(0, 10))
                                        .toLocaleDateString()
                                    : ""
                            }
                            onChange={(value) => setProfile({...profile, birthDate: value})}
                            disabled = {!isEditing}
                            type="date"
                        />
                    </div>
                    <div
                        className="
                            mt-6
                            flex
                            gap-3
                        "
                    >

                        {!isEditing ? (

                            <Button
                                title="Edit Profile"
                                onClick={() =>
                                    setIsEditing(
                                        true
                                    )
                                }
                            />

                        ) : (

                            <>
                                <Button
                                    title="Save Changes"
                                    onClick={handleUpdateProfile}
                                />

                                <Button
                                    title="Cancel"
                                    onClick={() =>{
                                        setProfile(originalProfile)
                                        setIsEditing(false)
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


type ProfileItemProps = {

    label: string;

    value?: string;

};

function ProfileItem({
    label,
    value
}: ProfileItemProps) {

    return (

        <div>

            <p
                className="
                    text-sm
                    text-slate-500
                "
            >
                {label}
            </p>

            <p
                className="
                    text-lg
                    font-medium
                "
            >
                {value}
            </p>

        </div>

    );

}