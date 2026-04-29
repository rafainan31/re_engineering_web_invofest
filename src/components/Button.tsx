interface ButtonProps {
    label: string;
    variant?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, variant }) => {
    const baseStyle =
        "p-4 rounded-2xl font-semibold transition-all duration-300 ease-in-out active:scale-95";

    const variants = {
        primary: "bg-red-800 text-white hover:bg-red-700",
        outline: "border border-red-800 text-red-800 hover:bg-red-100",
    };

    return (
        <button className={`${baseStyle} ${variants[variant as keyof typeof variants]}`}>
            {label}
        </button>
    );
};

export default Button;