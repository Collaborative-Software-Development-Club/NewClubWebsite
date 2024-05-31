import styles from './Section.module.css'

interface SectionProps extends OnlyChildren {
    id?: string
    fullScreen?: boolean
}
const Section = ({ children, id, fullScreen }: SectionProps) => {
    return (
        <section className={`${styles.section} ${fullScreen && styles.fullScreen}`} id={id}>
            {children}
        </section>
    )
}

export default Section
