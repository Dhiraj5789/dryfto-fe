const Chip = ({ label }: { label: string }) => {
    return (
        <div className="inline-flex items-center rounded-full border border-gray-200 px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs">
            {label}
        </div>
    );
};

export default Chip;