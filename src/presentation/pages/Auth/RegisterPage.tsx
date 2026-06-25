import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

import { RegisterUseCase } from "../../../application/useCases/auth/RegisterUseCase";
import { AuthRepository } from "../../../data/repositories/AuthRepository";
import AuthLayout from "../../layouts/Layout";
import Card from "../../components/UI/Card";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Constants/routes";

export default function RegisterPage() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        try {
            setLoading(true);

            const repository = new AuthRepository();
            const registerUseCase = new RegisterUseCase(repository);

            const result = await registerUseCase.execute({
                command: {
                    name,
                    lastName,
                    nationalCode,
                    birthDate,
                    username,
                    email,
                    phoneNumber
                }
            });

            console.log("Register SUCCESS:", result);

            sessionStorage.setItem("userId", result.id);

            navigate(ROUTES.CREATE_PASSWORD);

        } catch (err) {
            console.error("Register FAILED:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <Card title="Register">

                <Input
                    label="Name"
                    value={name}
                    onChange={setName}
                />

                <Input
                    label="Last Name"
                    value={lastName}
                    onChange={setLastName}
                />

                <Input
                    label="National Code"
                    value={nationalCode}
                    onChange={setNationalCode}
                />

                <Input
                    label="Birth Date"
                    value={birthDate}
                    onChange={setBirthDate}
                />

                <Input
                  label="Username"
                    value={username}
                    onChange={setUsername}
                />

                <Input
                    label="Email"
                    value={email}
                    onChange={setEmail}
                />

                <Input
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                />

                <Button
                    title="Register"
                    loading={loading}
                    onClick={handleRegister}
                />

                <div className="mt-6 text-center">

                    <span>
                        Already have an account?
                    </span>

                    <Link
                        to="/login"
                        className="
                        ml-2
                        text-blue-600
                        hover:underline"
                    >
                        Login
                    </Link>
                </div>
            </Card>
        </AuthLayout>
    );
    
    // return (
    //     <div style={{ maxWidth: 400, margin: "100px auto" }}>
    //         <h2>Login</h2>

    //         <Input
    //             label="Name"
    //             value={name}
    //             onChange={setName}
    //         />

    //         <Input
    //             label="LastName"
    //             value={lastName}
    //             onChange={setLastName}
    //         />

    //         <Input
    //             label="NationalCode"
    //             value={nationalCode}
    //             onChange={setNationalCode}
    //         />

    //         <Input
    //             label="BirthDate"
    //             value={birthDate}
    //             onChange={setBirthDate}
    //         />

    //         <Input
    //             label="Username"
    //             value={username}
    //             onChange={setUsername}
    //         />

    //         <Input
    //             label="Email"
    //             value={email}
    //             onChange={setEmail}
    //         />                                                            

    //         <Input
    //             label="PhoneNumber"
    //             value={phoneNumber}
    //             onChange={setPhoneNumber}
    //         />

    //         <Button
    //             title="Whats next?"
    //             loading={loading}
    //             onClick={handleRegister}
    //         />
    //     </div>
    // );
}