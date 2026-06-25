import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/Auth/RegisterPage";
import LoginPage from "../pages/Auth/LoginPage";
import CreatePasswordPage from "../pages/Auth/CreatePasswordPage";
import HomePage from "../pages/Auth/HomePage";
import ForgotPasswordPage from "../pages/Auth/ForgotPasswordPage";
import ResetPasswordPage from "../pages/Auth/ResetPasswordPage";
import ProfilePage from "../pages/User/MyProfilePage";
import GetUserDetailsPage from "../pages/User/GetUserDetailsPage";
import GetAllUsersPage from "../pages/User/GetAllUsersPage";
import CreateUserPage from "../pages/User/CreateUserPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create-password" element={<CreatePasswordPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/user/get-all" element={<GetAllUsersPage />} />
            <Route path="/user/:userId" element={<GetUserDetailsPage />} />
            <Route path="/user/add" element={<CreateUserPage/>} />
        </Routes>
    );
}