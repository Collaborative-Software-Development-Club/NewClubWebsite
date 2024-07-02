import styles from './Paragraph.module.css';
import TextElement from '../TextElement';

/**
 * Renders a p element with the provided text.
 *
 * @param props The props object containing the children.
 * @param props.children The text content of the heading.
 * @returns an h4 element with the provided children
 */
const Paragraph = TextElement('p', styles.paragraph);

export default Paragraph;
