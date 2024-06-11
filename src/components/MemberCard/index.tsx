import Card from '@/ui_library/components/Card';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Heading3 from '@/ui_library/components/Heading3';
import Paragraph from '@/ui_library/components/Paragraph';
import MemberPhoto from './MemberPhoto';
import Padding from '@/ui_library/components/Padding';
import Button from '@/ui_library/components/Button';

interface MemberCardProps {
    name: string;
    description: string;
    photo: string;
    position: string;
}

const NUMBER_OF_CHARACTERS_IN_DESCRIPTION = 300;
const MemberCard = (props: MemberCardProps) => {
    const shortenedDescription =
        props.description.substring(0, NUMBER_OF_CHARACTERS_IN_DESCRIPTION) + '...';
    return (
        <Card width="340px">
            <Padding all="md">
                <FlexContainer direction="column" alignItems="stretch" gap="md">
                    <FlexContainer direction="column" alignItems="center">
                        <MemberPhoto src={props.photo} />
                    </FlexContainer>
                    <FlexContainer
                        direction="column"
                        justifyContent="space-between"
                        alignItems="stretch"
                    >
                        <FlexContainer direction="column" gap="sm" alignItems="start">
                            <Heading3>{props.name}</Heading3>
                            <Paragraph>{`Position: ${props.position}`}</Paragraph>
                            {/* <Paragraph>{shortenedDescription}</Paragraph> */}
                        </FlexContainer>
                        <Button href={`/members/${props.name}`} variant="primary">
                            More
                        </Button>
                    </FlexContainer>
                </FlexContainer>
            </Padding>
        </Card>
    );
};

export default MemberCard;
