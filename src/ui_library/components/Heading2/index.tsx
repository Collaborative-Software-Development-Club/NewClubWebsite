import TextElement from '../TextElement';
import styles from './Heading2.module.css';

/**
 * Renders a h2 element with the provided children.
 *
 * @param props The props object containing the children.
 * @param props.children The text content of the heading.
 * @returns an h2 element with the provided children
 */
const Heading2 = TextElement('h2', styles.heading2);

export default Heading2;
