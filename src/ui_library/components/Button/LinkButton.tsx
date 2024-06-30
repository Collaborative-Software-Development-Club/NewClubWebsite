import Link from 'next/link';

const LinkButton = (props: InternalLinkButtonProps) => {
    return (
        <Link href={props.href} className={props.className} target={props.newTab ? '_blank' : ''}>
            {props.children}
        </Link>
    );
};

export default LinkButton;
