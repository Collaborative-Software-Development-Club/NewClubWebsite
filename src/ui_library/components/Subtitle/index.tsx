import TextElement from '../TextElement';
import styles from './Subtitle.module.css';

/**
 * Renders a p element with the provided text with the subtitle style.
 *
 * @param props The props object containing the children.
 * @param props.children The text content of the heading.
 */
const Subtitle = TextElement('p', styles.subtitle);

export default Subtitle;
