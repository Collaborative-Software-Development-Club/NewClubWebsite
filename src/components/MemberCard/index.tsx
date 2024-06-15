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
    //const shortenedDescription = props.description.substring(0, NUMBER_OF_CHARACTERS_IN_DESCRIPTION) + '...';
    return (
        <Card width="300px">
            <FlexContainer direction="column" alignItems="stretch" gap="md">
                <Padding vertical="none" horizontal="none">
                    <FlexContainer direction="column" alignItems="center">
                        <MemberPhoto src={props.photo} />
                    </FlexContainer>
                </Padding>
                <FlexContainer
                    direction="column"
                    justifyContent="space-between"
                    alignItems="stretch"
                >
                    <FlexContainer direction="column" gap="sm" alignItems="start">
                        <Padding vertical="none" horizontal="sm">
                            <Button href={`/members/${props.name}`} variant="terciary">
                                {props.name}
                            </Button>
                        </Padding>
                        <Padding top="none" bottom="md" right="md" left="md">
                            <Paragraph>{`${props.position}`}</Paragraph>
                        </Padding>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Card>
    );
};

export default MemberCard;
