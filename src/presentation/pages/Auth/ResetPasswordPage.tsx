import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

import { AuthRepository } from "../../../data/repositories/AuthRepository";
import { validatePassword } from "../../../core/validation/PasswordValidator";
import { ROUTES } from "../../Constants/routes";
import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/Layout";
import Card from "../../components/UI/Card";
import { ResetPasswordUseCase } from "../../../application/useCases/auth/ResetPasswordUseCase";

export default function ResetPasswordPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const rawResetPasswordToken = searchParams.get("rawResetPasswordToken")

    const [password, setPassword] = useState("");    
    const [confirmPassword, setConfirmPassword] = useState("");    
    const [loading, setLoading] = useState(false);

    const passwordValidation = validatePassword(password);
    const passwordsMatch = password === confirmPassword;            

    const handleResetPassword = async () => {
        try {
            if (!passwordValidation.isValid)
                return;

            if (!passwordsMatch)
                return;
            
            setLoading(true);
            
            const repository = new AuthRepository();
            const resetPasswordUseCase = new ResetPasswordUseCase(repository);
            const userId = sessionStorage.getItem("userId");

            const result = await resetPasswordUseCase.execute({
                command: {
                    rawResetPasswordToken: rawResetPasswordToken!,
                    password,
                    confirmPassword
                }
            });

            console.log("Password Reset SUCCESS:", result);

            navigate(ROUTES.LOGIN)

        } catch (err) {
            console.error("Password Reset FAILED:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <Card title="Reset Password">
                <Input
                    label="New password"
                    value={password}
                    type="password"
                    onChange={setPassword}/>
                <div>
                    <p>
                        {passwordValidation.minLength ? "✅" : "❌"}
                        Minimum 8 characters
                    </p>

                    <p>
                        {passwordValidation.hasUpperCase ? "✅" : "❌"}
                        One uppercase letter
                    </p>

                    <p>
                       {passwordValidation.hasLowerCase ? "✅" : "❌"}
                        One lowercase letter
                    </p>

                    <p>
                        {passwordValidation.hasNumber ? "✅" : "❌"}
                        One number
                    </p>

                    <p>
                        {passwordValidation.hasSpecialCharacter ? "✅" : "❌"}
                        One special character
                    </p>
                </div>
                <Input
                    label="Confirm new password"
                    value={confirmPassword}
                    type="password"
                    onChange={setConfirmPassword}/>
                <p>
                    {passwordsMatch ? "✅" : "❌"}
                    Passwords match
                </p>

                <Button
                    title="Reset Password"
                    loading={loading}
                    onClick={handleResetPassword}
                    disabled={!passwordValidation.isValid || !passwordsMatch}/> 
            </Card>
        </AuthLayout>
    );
}