import styles from "./Button.module.css"
import Link from "next/link"

const LinkButton = (props: LinkButtonProps) => {
    return <Link href={props.href} >{props.children}</Link>
}

export default LinkButton