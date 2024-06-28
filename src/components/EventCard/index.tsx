import FlexContainer from '@/ui_library/components/FlexContainer';
import Card from '../../ui_library/components/Card';
import Paragraph from '../../ui_library/components/Paragraph';
import Heading3 from '@/ui_library/components/Heading3';
import Padding from '@/ui_library/components/Padding';
import formatDate from '@/helpers/formatDate';
import { EventData } from '@/cms';

interface EventCardProps {
    title: string;
    description: string;
    date: Date | [Date, Date];
    location?: string;
}

const EventCard = (props: EventCardProps) => {
    let dateAsString: string;
    if (props.date instanceof Date) {
        console.log(props.date);
        console.log(props.date.getHours());
        dateAsString = formatDate(props.date);
    } else {
        dateAsString = formatDate(props.date[0]) + ' to ' + formatDate(props.date[1]);
    }
    return (
        <Card width="500px">
            <Padding>
                <FlexContainer justifyContent="space-between" direction="column" fill>
                    <FlexContainer direction="column" gap="sm">
                        <Heading3>{props.title}</Heading3>
                        <Paragraph>{props.description}</Paragraph>
                        {props.location && <Paragraph>{props.location}</Paragraph>}
                        <Paragraph>{dateAsString}</Paragraph>
                    </FlexContainer>
                </FlexContainer>
            </Padding>
        </Card>
    );
};

export default EventCard;
