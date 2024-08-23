import UnityGame from '@/components/UnityGame';
import FlexContainer from '@/ui_library/components/FlexContainer';

const GamePage = ({ path }: { path: string }) => {
    return (
        <FlexContainer direction="column">
            <UnityGame path={path} />
        </FlexContainer>
    );
};

export default GamePage;
