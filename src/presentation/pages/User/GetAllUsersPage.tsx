import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { UserRepository } from "../../../data/repositories/UserRepository";
import { GetAllUsersUseCase } from "../../../application/useCases/user/GetAllUsersUseCase";
import { ToggleActivityUseCase } from "../../../application/useCases/user/ToggleActivityUseCase";
import { ToggleBlockUseCase } from "../../../application/useCases/user/ToggleBlockUseCase";
import { DeleteUserUseCase } from "../../../application/useCases/user/DeleteUserUseCase";
import type { GetAllUsersResponseDto } from "../../../data/dtos/User/GetAllUsersResponseDto";
import DashboardLayout from "../../layouts/DashboardLayout";
import Card from "../../components/UI/Card";
import UserRow from "../../components/UI/UserRow";
import Button from "../../components/UI/Button";
import { ROUTES } from "../../Constants/routes";

export default function GetAllUsersPage() {

    const navigate = useNavigate();

    const [users, setUsers] = useState<GetAllUsersResponseDto[]>([]);

    const repository = new UserRepository();

    const [loading, setLoading] = useState(true);

    const loadUsers =
        async () => {

            try {                

                const useCase = new GetAllUsersUseCase(repository);

                const result =
                    await useCase.execute({
                        query: {}
                    });

                setUsers(result);

            }
            catch (err) {

                console.error(err);

            }
            finally {

                setLoading(false);

            }

        };

    useEffect(() => {

        loadUsers();

    }, []);

    const handleToggleActivity =
        async (userId: string) => {

            try {

                const useCase = new ToggleActivityUseCase(repository);

                await useCase.execute({
                    command: {
                        userId
                    }
                });

                await loadUsers();

            }
            catch (err) {

                console.error(err);

            }

        };

    const handleToggleBlock =
        async (userId: string) => {

            try {

                const useCase = new ToggleBlockUseCase(repository);

                await useCase.execute({
                    command: {
                        userId
                    }
                });

                await loadUsers();

            }
            catch (err) {

                console.error(err);

            }

        };

    const handleDelete =
        async (userId: string) => {

            const confirmed =
                window.confirm(
                    "Delete this user?"
                );

            if (!confirmed)
                return;

            try {
                const repository = new UserRepository();

                const useCase = new DeleteUserUseCase(repository);

                await useCase.execute({
                    command: {
                        userId
                    }
                });
                await loadUsers();
            }
            catch (err) {

                console.error(err);
            }
        };
    return (
        <DashboardLayout>
            <div className=" max-w-6xl mx-auto">
                <Card title="Users">
                    <div
                        className="flex justify-between items-center mb-4">

                        <Button title="Add User"
                            onClick={() =>
                                navigate(ROUTES.ADD_USER)}/>

                    </div>

                    {loading ? (
                        <p>
                            Loading...
                        </p>
                    ) : (
                        <table className="w-full text-left">
                            <thead>
                                <tr
                                    className="
                                        border-b
                                        bg-slate-100
                                    "
                                >
                                    <th className="px-6 py-4 w-16">
                                        #
                                    </th>

                                    <th className="px-6 py-4">
                                        Name
                                    </th>

                                    <th className="px-6 py-4">
                                        Last Name
                                    </th>

                                    <th className="px-6 py-4">
                                        Status
                                    </th>

                                    <th className="px-6 py-4 text-right">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (

                                    <UserRow
                                        key={user.id}
                                        rowNumber={index+1}
                                        id={user.id}
                                        name={user.name}
                                        lastName={user.lastName}
                                        isActive={user.isActive}
                                        isBlocked={user.isBlocked}
                                        onDetails={() =>
                                            navigate(`/user/${user.id}`)
                                        }
                                        onToggleActive={() =>
                                            handleToggleActivity(
                                                user.id
                                            )
                                        }
                                        onToggleBlock={() =>
                                            handleToggleBlock(
                                                user.id
                                            )
                                        }
                                        onDelete={() =>
                                            handleDelete(
                                                user.id
                                            )
                                        }
                                    />
                                ))}
                            </tbody>
                        </table>
                    )}

                    <div
                        className="flex justify-between items-center mb-4">

                        <Button title="Back"
                            onClick={() =>
                                navigate(ROUTES.HOME)}/>

                    </div>
                </Card>
            </div>
        </DashboardLayout>
    );
}