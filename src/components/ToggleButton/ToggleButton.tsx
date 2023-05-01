import { useToggle } from "hooks/useToggle";
import {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    ReactNode,
    useEffect,
} from "react";
import style from "./ToggleButton.module.scss";

type Props = {
    label: string;
    icon: ReactNode;
    onToggle?: (state: boolean) => void;
} & Omit<
    DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >,
    "onClick"
>;

export function ToggleButton({ label, icon, onToggle, ...buttonProps }: Props) {
    const [isOn, flip] = useToggle(false);

    useEffect(() => {
        onToggle?.(isOn);
    }, [isOn]);

    const labelClass = `${style.toggleButtonWrapper} ${
        isOn ? style.on : style.off
    }`;
    return (
        <label className={labelClass}>
            <button onClick={flip} {...buttonProps}>
                {icon}
            </button>
            <p>{label}</p>
        </label>
    );
}
