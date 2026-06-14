// type InputProps = {
//     label: string;
//     type?: string;
//     value: string;
//     onChange: (value: string) => void;
// };

// export default function Input({
//     label,
//     type = "text",
//     value,
//     onChange
// }: InputProps) {
//     return (
//         <div style={{ marginBottom: 12 }}>
//             <label style={{ display: "block", marginBottom: 4 }}>
//                 {label}
//             </label>

//             <input
//                 type={type}
//                 value={value}
//                 onChange={(e) => onChange(e.target.value)}
//                 style={{
//                     padding: "10px",
//                     width: "100%",
//                     border: "1px solid #ccc",
//                     borderRadius: 6
//                 }}
//             />
//         </div>
//     );
// }

type InputProps = {
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
};

export default function Input({
    label,
    type = "text",
    value,
    onChange
}: InputProps) {

    return (

        <div className="mb-5">

            <label
                className="
                    block
                    mb-2
                    font-medium
                    text-slate-700
                "
            >
                {label}
            </label>

            <input
                type={type}
                value={value}
                onChange={(e) =>
                    onChange(
                        e.target.value
                    )
                }
                className="
                    w-full
                    px-4
                    py-3
                    rounded-lg
                    border
                    border-slate-300

                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:border-blue-500

                    transition
                "
            />

        </div>

    );
}