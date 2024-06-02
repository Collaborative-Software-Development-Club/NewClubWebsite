import Heading2 from '@/ui_library/components/Heading2';
import styles from './RotatingText.module.css';
import content from '@/websiteContent';

/*
I tried to make this a reusable component, 
but since the keyframes depend on the number of words, 
I couldn't do it with only css.
Maybe there is a way with javascript but I didn't want to ge into it.
*/

const RotatingText = () => {
    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                {content.ROTATING_TEXT.map((index) => {
                    return (
                        <span className={styles.word} key={index}>
                            <Heading2>{index}</Heading2>
                        </span>
                    );
                })}
            </div>
            <Heading2>with us</Heading2>
        </div>
    );
};

export default RotatingText;
