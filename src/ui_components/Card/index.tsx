import FlexContainer from '../FlexContainer'
import styles from "./Card.module.css"

const Card = ({ children }: OnlyChildren) => {
    return (
        <div className={styles.card}>
        {children}
        </div>
    )
}

export default Card
