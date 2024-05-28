import FlexContainer from '../FlexContainer'
import Padding from '../Padding'
import styles from "./Card.module.css"

const Card = ({ children }: OnlyChildren) => {
    return (
        <div className={styles.card}>
            <Padding>
        {children}
        </Padding>
        </div>
    )
}

export default Card
