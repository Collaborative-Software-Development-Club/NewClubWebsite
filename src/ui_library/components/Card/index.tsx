import FlexContainer from '../FlexContainer';
import Padding from '../Padding';
import styles from './Card.module.css';

interface CardProps extends OnlyChildren {
    width?: string;
}

const Card = ({ width, children }: CardProps) => {
    console.log('card width: ' + width);
    return (
        <div className={styles.card} style={width ? { maxWidth: width } : {}}>
            {children}
        </div>
    );
};

export default Card;
