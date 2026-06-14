type CardProps = {
    title?: string;
    children: React.ReactNode;
};

export default function Card({
    title,
    children
}: CardProps) {

    return (

        <div
            className="
                w-full
                max-w-lg

                bg-white

                rounded-2xl

                shadow-xl

                p-8
            "
        >

            {
                title &&
                (
                    <h1
                        className="
                            text-3xl
                            font-bold
                            text-center
                            mb-8
                            text-slate-800
                        "
                    >
                        {title}
                    </h1>
                )
            }

            {children}

        </div>

    );

}