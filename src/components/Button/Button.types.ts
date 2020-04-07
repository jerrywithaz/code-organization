export type ButtonProps = {
    children?: string | null;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;