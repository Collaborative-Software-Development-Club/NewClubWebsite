import styles from "./Section.module.css"

interface SectionProps extends OnlyChildren {
    id?: string
}
const Section = ({
    children,
    id
}: SectionProps) => {
    return <section className={styles.section} id={id}>{children}</section>
}

export default Section
