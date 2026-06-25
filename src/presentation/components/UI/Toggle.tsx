import { boolean } from "zod";

type ToggleProps = {
    label: string;
    checked: boolean;
    disabled?: boolean; 
    onChange: (value: boolean) => void;
};

export default function Toggle({
    label,
    checked,
    disabled = false,
    onChange
}: ToggleProps) {

    return (

        <div className="flex items-center gap-3">
            <span className="text-sm font-medium">
                {label}
            </span>

            <button
                type="button"
                disabled = {disabled}
                onClick={() => {
                    if(disabled)
                        return;
                    onChange(!checked);
                }}
                className={`
                    relative
                    w-14
                    h-7
                    rounded-full
                    transition-all
                    duration-300

                    ${checked
                        ? "bg-green-500"
                        : "bg-slate-300"}

                    ${disabled
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }                        
                `}
            >

                <span
                    className={`
                        absolute
                        top-1
                        w-5
                        h-5
                        bg-white
                        rounded-full
                        transition-all
                        duration-300

                        ${checked
                            ? "left-8"
                            : "left-1"}
                    `}
                />

            </button>

        </div>

    );

}