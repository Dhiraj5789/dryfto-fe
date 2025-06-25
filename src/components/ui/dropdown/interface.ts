export interface IDropdownOption {
    value: string;
    label: string;
}

export interface IDropdownProps {
    options: IDropdownOption[];
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    disabled?: boolean;
}
