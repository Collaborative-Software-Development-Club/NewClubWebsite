import styles from "./Heading1.module.css"
import TextElement from "../TextElement"

/* const Heading1 = ({children}: OnlyStringChildren) => {
  return (
    <h1 className={styles.heading1}>{children}</h1>
  )
} */


const Heading1 = TextElement('h1', styles.heading1)

export default Heading1