import { useEffect, useRef, useState } from "react";

type Props = {

    isActive: boolean;

    isBlocked: boolean;

    onDetails: () => void;

    onToggleActive: () => void;

    onToggleBlock: () => void;

    onDelete: () => void;
};

export default function UserActionsMenu({
    isActive,
    isBlocked,
    onDetails,
    onToggleActive,
    onToggleBlock,
    onDelete
}: Props) {

    const [isOpen, setIsOpen] =
        useState(false);

    const menuRef =
        useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleOutsideClick = (
            event: MouseEvent
        ) => {

            if (
                menuRef.current &&
                !menuRef.current.contains(
                    event.target as Node
                )
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () =>
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );

    }, []);

    return (

        <div
            className="relative"
            ref={menuRef}
        >

            <button
                onClick={() =>
                    setIsOpen(!isOpen)
                }
                className="
                    px-2
                    py-1
                    rounded
                    hover:bg-slate-200
                    text-lg
                    font-bold
                "
            >
                ⋮
            </button>

            {isOpen && (

                <div
                    className="
                        absolute
                        right-0
                        top-10

                        w-52

                        bg-white
                        border
                        rounded-lg
                        shadow-lg

                        overflow-hidden
                        z-50
                    "
                >

                    <button
                        onClick={onDetails}
                        className="
                            w-full
                            text-left
                            px-4
                            py-3
                            hover:bg-slate-100
                        "
                    >
                        Details
                    </button>

                    <button
                        onClick={onToggleActive}
                        className="
                            w-full
                            text-left
                            px-4
                            py-3
                            hover:bg-slate-100
                        "
                    >
                        {isActive
                            ? "Deactivate"
                            : "Activate"}
                    </button>

                    <button
                        onClick={onToggleBlock}
                        className="
                            w-full
                            text-left
                            px-4
                            py-3
                            hover:bg-slate-100
                        "
                    >
                        {isBlocked
                            ? "UnBlock"
                            : "Block"}
                    </button>

                    <button
                        onClick={onDelete}
                        className="
                            w-full
                            text-left
                            px-4
                            py-3
                            text-red-600
                            hover:bg-red-50
                        "
                    >
                        Delete
                    </button>

                </div>

            )}

        </div>

    );

}