import EventCard from '@/components/EventCard';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Heading2 from '@/ui_library/components/Heading2';
import Padding from '@/ui_library/components/Padding';
import Section from '@/ui_library/components/Section';
import content from '@/websiteContent';
import { getEvents } from '@/cms';

export default async function EventsSection() {
    const eventData = await getEvents();
    return (
        <Section id="events">
            <FlexContainer direction="column" gap="none">
                <Padding top="md" bottom="none" right="lg" left="lg">
                    <Heading2>{content.EVENTS_HEADING}</Heading2>
                </Padding>
                <FlexContainer direction="column" fill>
                    <FlexContainer direction="row" fill scroll>
                        <Padding vertical="lg" horizontal="lg">
                            <FlexContainer direction="row" alignItems="stretch">
                                {eventData.map((event) => {
                                    return <EventCard {...event} key={event.title} />;
                                })}
                            </FlexContainer>
                        </Padding>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Section>
    );
}
