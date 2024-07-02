import TextElement from '../TextElement';
import styles from './Heading3.module.css';

/**
 * Renders a h3 element with the provided children.
 *
 * @param props The props object containing the children.
 * @param props.children The text content of the heading.
 * @returns an h3 element with the provided children
 */
const Heading3 = TextElement('h3', styles.heading3);

export default Heading3;
