// import { useNavigate } from "react-router-dom";

// import Button from "./Button";

// import { AuthRepository } from "../../../data/repositories/AuthRepository";

// import { LogoutUseCase } from "../../../application/useCases/auth/logoutUseCase"; 

// export default function Navbar() {

//     const navigate =
//         useNavigate();

//     const handleLogout =
//         async () => {

//         try {

//             const repository =
//                 new AuthRepository();

//             const logoutUseCase =
//                 new LogoutUseCase(
//                     repository
//                 );

//             const result =
//                 await logoutUseCase.execute({

//                     command: {}

//                 });

//             console.log(
//                 result
//             );

//         }
//         catch (err) {

//             console.error(
//                 "Logout failed",
//                 err
//             );

//         }
//         finally {

//             sessionStorage.clear();

//             navigate(
//                 "/login"
//             );

//         }

//     };

//     return (

//         <nav
//             style={{
//                 display:
//                     "flex",

//                 justifyContent:
//                     "space-between",

//                 padding:
//                     "15px",

//                 background:
//                     "#2563eb",

//                 color:
//                     "white"
//             }}
//         >

//             <h3>
//                 Task Manager
//             </h3>

//             <Button
//                 title="Logout"
//                 onClick={
//                     handleLogout
//                 }
//             />

//         </nav>

//     );
// }

import { useNavigate } from "react-router-dom";
import { AuthRepository } from "../../../data/repositories/AuthRepository";
import { LogoutUseCase } from "../../../application/useCases/auth/LogoutUseCase";

export default function Navbar() {

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {

            const repository =
                new AuthRepository();

            const logoutUseCase =
                new LogoutUseCase(
                    repository
                );

            const result =
                await logoutUseCase.execute({
                    command: {}
                });

            console.log(result);

        }
        catch (err) {

            console.error(
                "Logout failed",
                err
            );

        }
        finally {

            sessionStorage.clear();

            navigate("/login");

        }

    };

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
                    max-w-7xl
                    mx-auto

                    px-6
                    py-4

                    flex
                    justify-between
                    items-center
                "
            >

                <h1
                    className="
                        text-xl
                        font-bold
                    "
                >
                    Task Manager
                </h1>

                <button
                    onClick={handleLogout}
                    className="
                        bg-red-500
                        hover:bg-red-600

                        px-4
                        py-2

                        rounded-lg

                        transition"
                >
                    Logout
                </button>

            </div>

        </nav>

    );

}