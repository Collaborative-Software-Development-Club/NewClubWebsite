import EventCard from '@/components/EventCard';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Heading3 from '@/ui_library/components/Heading3';
import Padding from '@/ui_library/components/Padding';
import Section from '@/ui_library/components/Section';
import content from '@/websiteContent';

const EventsSection = () => {
    return (
        <Section id="events">
            <FlexContainer direction="column" gap="none">
                <Padding top="md" bottom="none" right="lg" left="lg">
                    <Heading3>{content.EVENTS_HEADING}</Heading3>
                </Padding>
                <FlexContainer direction="column" fill>
                    <FlexContainer direction="row" fill scroll>
                        <Padding vertical="lg" horizontal="lg">
                            <FlexContainer direction="row" alignItems="stretch">
                                {content.EVENTS.map((event) => {
                                    return <EventCard {...event} />;
                                })}
                            </FlexContainer>
                        </Padding>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Section>
    );
};

export default EventsSection;
