interface ButtonProps extends OnlyStringChildren {
    variant: "primary" | "secondary" | "terciary"
}

interface ActionButtonProps extends ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

interface LinkButtonProps extends ButtonProps {
    href: string
}

type InternalButtonProps = Partial<LinkButtonProps & ActionButtonProps> & ButtonProps