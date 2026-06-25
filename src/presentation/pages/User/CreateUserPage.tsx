import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import { CreateUserUseCase } from "../../../application/useCases/user/CreateUserUseCase";
import { UserRepository } from "../../../data/repositories/UserRepository";
import { validatePassword } from "../../../core/validation/PasswordValidator";
import { ROUTES } from "../../Constants/routes";
import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/Layout";
import Card from "../../components/UI/Card";

export default function CreateUserPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");    
    const [lastName, setLastName] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false);            

    const handleCreateUser = async () => {
        try {
            setLoading(true);
            
            const repository = new UserRepository();
            const createUserUseCase = new CreateUserUseCase(repository);

            const result = await createUserUseCase.execute({
                command: {
                    name,
                    lastName,
                    nationalCode,
                    birthDate,
                    email,
                    phoneNumber
                }
            });

            console.log("User Creation SUCCESS:", result);

            navigate(ROUTES.GET_ALL_USERS)

        } catch (err) {
            console.error("User Creation FAILED:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <Card title="Add user">
                <Input
                    label="Name"
                    value={name}
                    onChange={setName}/>

                <Input
                    label="LastName"
                    value={lastName}
                    onChange={setLastName}/>                    

                <Input
                    label="NationalCode"
                    value={nationalCode}
                    onChange={setNationalCode}/>

                <Input
                    label="Birtgdate"
                    value={birthDate}
                    onChange={setBirthDate}/>

                <Input
                    label="Email"
                    value={email}
                    onChange={setEmail}/>

                <Input
                    label="PhoneNumber"
                    value={phoneNumber}
                    onChange={setPhoneNumber}/>

                <Button
                    title="Add"
                    loading={loading}
                    onClick={handleCreateUser}/> 
            </Card>
        </AuthLayout>
    );
}