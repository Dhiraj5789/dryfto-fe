import { twMerge } from 'tailwind-merge'

const Button = ({ onClick, children, variant = "base", className = "" }: { onClick: () => void, children: React.ReactNode, variant: "base" | "outlined", className?: string }) => {
    let variantStyle = "";
    switch (variant) {
        case "base":
            variantStyle = "bg-black text-white hover:bg-black/80";
            break;
        case "outlined":
            variantStyle = "border border-gray-200 hover:bg-gray-50";
            break;
    }
    return (
        <button
            onClick={onClick}
            className={twMerge('cursor-pointer flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold rounded-md px-3 w-full h-9', variantStyle, className)}
        >
            {children}
        </button>
    );
};

export default Button;