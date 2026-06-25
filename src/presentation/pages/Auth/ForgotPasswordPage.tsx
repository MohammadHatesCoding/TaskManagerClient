import { useState } from "react";

import AuthLayout from "../../layouts/Layout";

import Card from "../../components/UI/Card";

import Input from "../../components/UI/Input";

import Button from "../../components/UI/Button";

import { AuthRepository } from "../../../data/repositories/AuthRepository";

import { ForgotPasswordUseCase } from "../../../application/useCases/auth/ForgotPasswordUseCase";

export default function ForgotPasswordPage() {

    const [username, setUsername] = useState("");

    const [loading, setLoading] = useState(false);

    const [successMessage, setSuccessMessage] = useState(false);

    const handleSubmit = async () => {
            try {

                setLoading(true);

                const repository = new AuthRepository();

                const result = new ForgotPasswordUseCase(repository);

                await result.execute({
                    command: {
                        username
                    }
                });

                setSuccessMessage(true);

            }
            catch (err) {

                console.error(
                    err
                );

            }
            finally {

                setLoading(false);

            }

        };

    return (

        <AuthLayout>

            <Card
                title="Forgot Password"
            >

                <Input
                    label="Username"
                    value={username}
                    onChange={setUsername}/>

                {
                    successMessage && (

                        <div
                            className="
                                bg-green-100
                                border
                                border-green-300
                                text-green-700

                                p-4
                                rounded-lg

                                mb-4
                            "
                        >

                            A link has been sent to your email.
                            Check your inbox!

                        </div>

                    )
                }

                <Button
                    title="Submit"
                    loading={loading}
                    onClick={handleSubmit}
                />

            </Card>

        </AuthLayout>

    );

}