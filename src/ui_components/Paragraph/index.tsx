import styles from './Paragraph.module.css'
import TextElement from '@/ui_components/TextElement'

console.log(styles.paragraph)

const Paragraph = TextElement('p', styles.paragraph)

export default Paragraph