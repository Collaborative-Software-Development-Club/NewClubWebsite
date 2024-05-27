import styles from "./Button.module.css"

const LinkButton = (props: LinkButtonProps) => {
    return <a href={props.href} className={`${styles.button} ${styles[props.variant]}`}>{props.children}</a>
}

export default LinkButton