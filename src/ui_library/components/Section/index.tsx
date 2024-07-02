import styles from './Section.module.css';

interface SectionProps extends OnlyChildren {
    id?: string;
    fullScreen?: boolean;
}
/**
 * Renders a <section> element with the provided children.
 * @param props
 * @param {string} [props.fullScreen] whether the section should expand to occupy most of the screen.
 * @param {boolean} [props.id] id of the <section> element
 * @returns
 */
const Section = ({ children, id, fullScreen }: SectionProps) => {
    return (
        <section className={`${styles.section} ${fullScreen && styles.fullScreen}`} id={id}>
            {children}
        </section>
    );
};

export default Section;
