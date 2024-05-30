import Heading2 from '../Heading2'
import styles from './RotatingText.module.css'

/*
I tried to make this a reusable component, 
but since the keyframes depend on the number of words, 
I couldn't do it with only css.
Maybe there is a way with javascript but I didn't want to ge into it.
*/

const RotatingText = () => {
    return (
        <h2 className={styles.outer}>
            <div className={styles.inner}>
                <span className={styles.word}>
                    <Heading2>Code</Heading2>
                </span>
                <span className={styles.word}>
                    <Heading2>Collaborate</Heading2>
                </span>
                <span className={styles.word}>
                    <Heading2>Learn</Heading2>
                </span>
                <span className={styles.word}>
                    <Heading2>Develop</Heading2>
                </span>
            </div>
            <Heading2>with us</Heading2>
        </h2>
    )
}

export default RotatingText
