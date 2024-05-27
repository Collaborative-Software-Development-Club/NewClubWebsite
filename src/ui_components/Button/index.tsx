import ActionButton from "./ActionButton"
import LinkButton from "./LinkButton"

export default function Button(props: LinkButtonProps): React.JSX.Element
export default function Button(props: ActionButtonProps): React.JSX.Element
// signature of implementation wont appear as an option
export default function Button(props: InternalButtonProps) {
    if (props.href !== undefined) {
        return <LinkButton variant={props.variant} href={props.href} >{props.children}</LinkButton>
    } else if (props.onClick !== undefined) {
        return <ActionButton variant={props.variant} onClick={props.onClick}>{props.children}</ActionButton>
    }
}
