// type ButtonProps = {
//     title: string;
//     onClick?: () => void;
//     type?: "button" | "submit";
//     loading?: boolean;
//     disabled?: boolean;
// };

// export default function Button({
//     title,
//     onClick,
//     type = "button",
//     loading = false,
//     disabled = false
// }: ButtonProps) {
//     return (
//         <button
//             type={type}
//             onClick={onClick}
//             disabled={loading || disabled}
//             style={{
//                 padding: "10px 16px",

//                 background:
//                     loading || disabled
//                         ? "#94a3b8"
//                         : "#2563eb",

//                 color: "white",
//                 border: "none",
//                 borderRadius: 6,

//                 cursor:
//                     loading || disabled
//                         ? "not-allowed"
//                         : "pointer",

//                 opacity:
//                     loading || disabled
//                         ? 0.7
//                         : 1
//             }}
//             // style={{
//             //     padding: "10px 16px",
//             //     background: "#2563eb",
//             //     color: "white",
//             //     border: "none",
//             //     borderRadius: 6,
//             //     cursor: "pointer"
//             // }}
            
//         >
//             {loading ? "Loading..." : title}
//         </button>
//     );
// }

type ButtonProps = {
    title: string;
    onClick?: () => void;
    type?: "button" | "submit";
    loading?: boolean;
    disabled?: boolean;
};

export default function Button({

    title,
    onClick,
    type = "button",
    loading = false,
    disabled = false

}: ButtonProps) {

    return (

        <button

            type={type}

            onClick={onClick}

            disabled={
                loading ||
                disabled
            }

            className="

                w-full

                bg-blue-600

                hover:bg-blue-700

                disabled:bg-slate-400

                text-white

                py-3

                rounded-lg

                font-semibold

                transition

                cursor-pointer

                disabled:cursor-not-allowed

            "

        >

            {
                loading
                    ? "Loading..."
                    : title
            }

        </button>

    );
}