import FlexContainer from '../FlexContainer';
import Paragraph from '../Paragraph';

/**
 * Renders a bulleted list of strings.
 * @param props
 * @param {Array<string>} props.bullets - An array of strings representing the bullets of the list.
 * @return {JSX.Element} The rendered bulleted list.
 */
const TextBulletedList = ({ bullets }: { bullets: string[] }): JSX.Element => {
    return (
        <ul>
            <FlexContainer direction="column" gap="sm">
                {bullets.map((bullet) => (
                    <li key={bullet}>
                        <Paragraph>{bullet}</Paragraph>
                    </li>
                ))}
            </FlexContainer>
        </ul>
    );
};

export default TextBulletedList;
