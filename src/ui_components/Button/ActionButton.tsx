import styles from "./Button.module.css"

const ActionButton = (props: ActionButtonProps) => {
    return <button onClick={props.onClick} className={`${styles.button} ${styles[props.variant]}`}>{props.children}</button>
}

export default ActionButton