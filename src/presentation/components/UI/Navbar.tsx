import { Menu }
from "lucide-react";

type NavbarProps = {
    onMenuClick: () => void;
};

export default function Navbar({
    onMenuClick
}: NavbarProps) {

    return (

        <nav
            className="
                bg-blue-600
                text-white
                shadow
            "
        >

            <div
                className="
                    px-6
                    py-4

                    flex
                    items-center

                    gap-4
                "
            >

                <button
                    onClick={
                        onMenuClick
                    }
                >

                    <Menu
                        size={24}
                    />

                </button>

                <h1
                    className="
                        text-xl
                        font-bold
                    "
                >
                    Task Manager
                </h1>

            </div>

        </nav>

    );

}