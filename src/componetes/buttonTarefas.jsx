function Button({ children, onClick, variant = "primary" }) {

    const base = "w-full p-2 rounded-lg font-medium transition shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1";

    const styles = {
        primary: "bg-[#3B82F6] text-white hover:bg-[#60A5FA]",
        danger: "bg-[#E16A85] text-white hover:bg-[#EC8FA1]"
    };

    return (
        <button
            className={`${base} ${styles[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;