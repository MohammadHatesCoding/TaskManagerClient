type Props = { children: React.ReactNode; };

export default function AuthLayout({
    children
}: Props) {

    return (

        <div
            className="
                min-h-screen
                bg-slate-100
                flex
                items-center
                justify-center
                p-4
            "
        >

            {children}

        </div>

    );
}