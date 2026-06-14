import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

import { LoginUseCase } from "../../application/useCases/auth/LoginUseCase";
import { AuthRepository } from "../../data/repositories/AuthRepository";
import { ROUTES } from "../Constants/routes";
import AuthLayout from "../layouts/Layout";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);

            const repository = new AuthRepository();
            const loginUseCase = new LoginUseCase(repository);

            const result = await loginUseCase.execute({
                command: {
                    username,
                    password
                }
            });

            console.log("Login SUCCESS:", result);

            sessionStorage.setItem("accessToken", result.accessToken);
            sessionStorage.setItem("refreshToken", result.refreshToken);
            sessionStorage.setItem("accessTokenExpiresAt", result.accessTokenExpiresAt);

            navigate(ROUTES.HOME);

        } catch (err) {
            console.error("Login FAILED:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <Card title="Login">
                <Input
                    label="Username"
                    value={username}
                    onChange={setUsername}
                />

                <Input
                    label="Password"
                    value={password}
                    type="password"
                    onChange={setPassword}
                />

                <Button
                    title="Login"
                    loading={loading}
                    onClick={handleLogin}
                />

                <div className="mt-6 text-center">

                    <span>
                        Don't have an account?
                    </span>


                    <Link
                        to="/register"
                        className="
                        ml-2
                        text-blue-600
                        hover:underline"
                    >
                        Register
                    </Link>
                </div>
            </Card>
        </AuthLayout>
    );
}