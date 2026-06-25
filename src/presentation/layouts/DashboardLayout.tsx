import { ReactNode, useState } from "react";

import Navbar from "../components/UI/Navbar";

import Sidebar from "../components/UI/Sidebar";

type Props = {
    children: ReactNode;
};

export default function DashboardLayout({
    children
}: Props) {

    const [
        isSidebarOpen,
        setIsSidebarOpen
    ] = useState(false);

    return (

        <div
            className="
                min-h-screen
                bg-slate-100
            "
        >

            <Navbar
                onMenuClick={() =>
                    setIsSidebarOpen(
                        !isSidebarOpen
                    )
                }
            />

            <Sidebar
                isOpen={
                    isSidebarOpen
                }
                onClose={() =>
                    setIsSidebarOpen(
                        false
                    )
                }
            />

            <main
                className="
                    flex
                    justify-center
                    items-center

                    h-[calc(100vh-64px)]"
            >
                {children}
            </main>

        </div>

    );

}