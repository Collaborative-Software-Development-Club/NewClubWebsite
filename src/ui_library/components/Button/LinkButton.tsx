import Link from "next/link"

const LinkButton = (props: InternalLinkButtonProps) => {
    return <Link href={props.href} className={props.className}>{props.children}</Link>
}

export default LinkButton