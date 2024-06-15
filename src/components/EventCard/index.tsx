import FlexContainer from '@/ui_library/components/FlexContainer';
import Card from '../../ui_library/components/Card';
import Paragraph from '../../ui_library/components/Paragraph';
import Heading3 from '@/ui_library/components/Heading3';
import Padding from '@/ui_library/components/Padding';
import formatDate from '@/helpers/formatDate';

export interface EventCardProps {
    title: string;
    description: string;
    location: string;
    date: string;
}

const EventCard = (props: EventCardProps) => {
    const dateAsString = formatDate(props.date);
    return (
        <Card width="500px">
            <Padding>
                <FlexContainer justifyContent="space-between" direction="column" fill>
                    <FlexContainer direction="column" gap="sm">
                        <Heading3>{props.title}</Heading3>
                        <Paragraph>{props.description}</Paragraph>
                        <Paragraph>{props.location}</Paragraph>
                        <Paragraph>{dateAsString}</Paragraph>
                    </FlexContainer>
                </FlexContainer>
            </Padding>
        </Card>
    );
};

export default EventCard;
