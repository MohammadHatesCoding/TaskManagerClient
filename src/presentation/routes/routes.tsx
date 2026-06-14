import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import CreatePasswordPage from "../pages/CreatePasswordPage";
import HomePage from "../pages/HomePage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create-password" element={<CreatePasswordPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
}