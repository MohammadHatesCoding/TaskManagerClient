import { NavLink, useNavigate } from "react-router-dom";

import {
    UserCircle,
    User,
    LogOut,
    X
} from "lucide-react";

import { getCurrentUser } from "../../../core/utils/TokenHelper";

import { AuthRepository }
from "../../../data/repositories/AuthRepository";

import { LogoutUseCase }
from "../../../application/useCases/auth/LogoutUseCase";

type SidebarProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Sidebar({
    isOpen,
    onClose
}: SidebarProps) {

    const navigate =
        useNavigate();

    const user =
        getCurrentUser();

    const handleLogout =
        async () => {

            try {

                const repository =
                    new AuthRepository();

                const logoutUseCase =
                    new LogoutUseCase(
                        repository
                    );

                await logoutUseCase.execute({
                    command: {}
                });

            }
            catch (err) {

                console.error(
                    "Logout failed",
                    err
                );

            }
            finally {

                sessionStorage.clear();

                navigate(
                    "/login"
                );

            }

        };

    return (

        <>
            {isOpen && (

                <div
                    onClick={onClose}
                    className="
                        fixed
                        inset-0
                        bg-black/30
                        z-40
                    "
                />

            )}

            <aside
                className={`
                    fixed
                    top-0
                    left-0

                    h-screen
                    w-72

                    bg-white

                    shadow-xl

                    z-50

                    transform
                    transition-transform
                    duration-300

                    ${
                        isOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }
                `}
            >

                <div
                    className="
                        flex
                        justify-end

                        p-4
                    "
                >

                    <button
                        onClick={onClose}
                    >
                        <X size={22} />
                    </button>

                </div>

                <nav
                    className="
                        p-4

                        flex
                        flex-col

                        gap-2
                    "
                >

                    <NavLink
                        to="/profile"
                        onClick={onClose}
                        className="
                            flex
                            items-center

                            gap-2

                            p-3

                            rounded-lg

                            hover:bg-slate-100
                        "
                    >

                        <User
                            size={18}
                        />

                        Profile

                    </NavLink>

                    <NavLink
                        to="/user/get-all"
                        onClick={onClose}
                        className="
                            flex
                            items-center

                            gap-2

                            p-3

                            rounded-lg

                            hover:bg-slate-100
                        "
                    >

                        Users

                    </NavLink>                    

                    <button
                        onClick={
                            handleLogout
                        }
                        className="
                            flex
                            items-center

                            gap-2

                            p-3

                            rounded-lg

                            text-red-600

                            hover:bg-red-50
                        "
                    >

                        <LogOut
                            size={18}
                        />

                        Logout

                    </button>

                </nav>

            </aside>

        </>

    );

}