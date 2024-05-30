import ActionButton from './ActionButton'
import LinkButton from './LinkButton'
import styles from './Button.module.css'

export default function Button(props: ExternalLinkButtonProps): React.JSX.Element
export default function Button(props: ExternalActionButtonProps): React.JSX.Element
// signature of implementation wont appear as an option
export default function Button(props: OverloadButtonProps) {
    const theme = props.theme || 'dark'
    const className = `${styles.button} ${styles[props.variant]} ${styles[theme]}`
    if (props.href !== undefined) {
        return (
            <LinkButton className={className} href={props.href}>
                {props.children}
            </LinkButton>
        )
    } else if (props.onClick !== undefined) {
        return (
            <ActionButton className={className} onClick={props.onClick}>
                {props.children}
            </ActionButton>
        )
    }
}
