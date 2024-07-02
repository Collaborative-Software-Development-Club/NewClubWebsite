import assertUISize from '@/ui_library/asserts/assertUISize';
import styles from './Card.module.css';

interface CardProps extends OnlyChildren {
    width?: string;
}

/**
 * Renders a card component with optional width and children.
 *
 * @param props - The props object containing the width and children.
 * @param props.width - The width of the card in CSS format. Optional.
 * @param props.children - The content of the card.
 * @return The elements rendered inside the card.
 */
const Card = ({ width, children }: CardProps): JSX.Element => {
    return (
        <div className={styles.card} style={width ? { maxWidth: width } : {}}>
            {children}
        </div>
    );
};

export default Card;
