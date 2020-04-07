export type ButtonWithoutChildren = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export type ButtonProps = {
    children?: string
} & ButtonWithoutChildren;