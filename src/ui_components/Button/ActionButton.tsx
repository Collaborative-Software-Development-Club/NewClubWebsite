import styles from "./Button.module.css"

const ActionButton = (props: InternalActionButtonProps) => {
    return <button onClick={props.onClick} className={props.className}>{props.children}</button>
}

export default ActionButton