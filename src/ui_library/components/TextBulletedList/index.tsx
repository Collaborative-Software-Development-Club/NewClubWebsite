import FlexContainer from '../FlexContainer';
import Paragraph from '../Paragraph';

const TextBulletedList = ({ bullets }: { bullets: string[] }) => {
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
