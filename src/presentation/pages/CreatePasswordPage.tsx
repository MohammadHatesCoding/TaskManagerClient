import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

import { CreatePasswordUseCase } from "../../application/useCases/auth/CreatePasswordUseCase";
import { AuthRepository } from "../../data/repositories/AuthRepository";
import { validatePassword } from "../../core/validation/PasswordValidator";
import { ROUTES } from "../Constants/routes";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/Layout";
import Card from "../components/UI/Card";

export default function CreatePasswordPage() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");    
    const [confirmPassword, setConfirmPassword] = useState("");    
    const [loading, setLoading] = useState(false);
    const passwordValidation = validatePassword(password);
    const passwordsMatch = password === confirmPassword;            

    const handleCreatePassword = async () => {
        try {
            if (!passwordValidation.isValid)
                return;

            if (!passwordsMatch)
                return;
            
            setLoading(true);
            
            const repository = new AuthRepository();
            const createPasswordUseCase = new CreatePasswordUseCase(repository);
            const userId = sessionStorage.getItem("userId");

            const result = await createPasswordUseCase.execute({
                command: {
                    userId: userId!,
                    password,
                    confirmPassword
                }
            });

            console.log("Password Creation SUCCESS:", result);

            navigate(ROUTES.LOGIN)

        } catch (err) {
            console.error("Password Creation FAILED:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <Card title="Create Password">
                <Input
                    label="Password"
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
                    label="Confirm Password"
                    value={confirmPassword}
                    type="password"
                    onChange={setConfirmPassword}/>
                <p>
                    {passwordsMatch ? "✅" : "❌"}
                    Passwords match
                </p>

                <Button
                    title="Create Password"
                    loading={loading}
                    onClick={handleCreatePassword}
                    disabled={!passwordValidation.isValid || !passwordsMatch}/> 
            </Card>
        </AuthLayout>
    );
}