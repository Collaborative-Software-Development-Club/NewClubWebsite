/**
 * Props that all button components should have (the exported one)
 */
interface ExternalButtonProps extends OnlyStringChildren {
    variant: 'primary' | 'secondary' | 'terciary';
    theme?: 'dark' | 'light';
}

/**
 * Props that all variants of the internal button components used only in the Button directory
 */
interface InternalButtonProps extends OnlyChildren {
    className: string;
}

/**
 * Props exclusive to the button that receives an action
 */
type ActionButtonProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * Props exclusive to the button that receives an href
 */
type LinkButtonProps = {
    href: string;
    newTab?: boolean;
};

/**
 * Props that the exported button should have when provided an action
 */
type ExternalActionButtonProps = ActionButtonProps & ExternalButtonProps;

/**
 * Props that the exported button should have when provided an href
 */
type ExternalLinkButtonProps = LinkButtonProps & ExternalButtonProps;

/**
 * Props that the internal action button should receive
 * (component used only within this directory)
 */
type InternalActionButtonProps = ActionButtonProps & InternalButtonProps;

/**
 * Props that the internal link button should receive
 * (component used only within this directory)
 */
type InternalLinkButtonProps = LinkButtonProps & InternalButtonProps;

/**
 * Props that the overloaded function implementation should receive
 * (doesn't apppear an an option when using the button externally)
 */
type OverloadButtonProps = Partial<LinkButtonProps & ActionButtonProps> & ExternalButtonProps;
