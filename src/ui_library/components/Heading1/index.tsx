import styles from './Heading1.module.css';
import TextElement from '../TextElement';

/* const Heading1 = ({children}: OnlyStringChildren) => {
  return (
    <h1 className={styles.heading1}>{children}</h1>
  )
} */

/**
 * Renders a h1 element with the provided children.
 *
 * @param props The props object containing the children.
 * @param props.children The text content of the heading.
 * @returns an h1 element with the provided children
 */
const Heading1 = TextElement('h1', styles.heading1);

export default Heading1;
