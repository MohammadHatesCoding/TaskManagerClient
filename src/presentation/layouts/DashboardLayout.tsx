import Navbar from "../components/UI/Navbar";

type DashboardLayoutProps = {
    children: React.ReactNode;
};

export default function DashboardLayout({
    children
}: DashboardLayoutProps) {

    return (

        <div
            className="
                min-h-screen
                bg-slate-100
            "
        >

            <Navbar />

            <main
                className="
                    max-w-7xl
                    mx-auto
                    p-6
                "
            >
                {children}
            </main>

        </div>

    );

}