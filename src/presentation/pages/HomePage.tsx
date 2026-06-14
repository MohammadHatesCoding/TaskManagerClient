import Navbar from "../components/UI/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ROUTES } from "../Constants/routes";
import DashboardLayout from "../layouts/DashboardLayout";
import Card from "../components/UI/Card";

export default function HomePage() {

    const navigate =
        useNavigate();

    useEffect(() => {

        const token =
            sessionStorage.getItem(
                "accessToken"
            );

        if (!token)
            navigate(
                ROUTES.LOGIN
            );

    }, [navigate]);

    return (
        <DashboardLayout>
            <Card title="Dashboard">
                <h2
                    className="
                        text-xl
                        font-semibold
                        mb-4
                    "
                >
                    Welcome
                </h2>

                <p
                    className="
                        text-slate-600
                    "
                >
                    You are successfully logged in.
                </p>
            </Card>
        </DashboardLayout>
    );
}