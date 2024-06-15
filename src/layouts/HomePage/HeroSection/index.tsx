import Button from '@/ui_library/components/Button';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Heading1 from '@/ui_library/components/Heading1';
import Section from '@/ui_library/components/Section';
import Subtitle from '@/ui_library/components/Subtitle';
import BackgroundImage from '@/components/BackgroundImage';
import JoinDiscordWrapper from './JoinDiscordWrapper';
import getMeetingCalendarLink from '@/helpers/getMeetingCalendarLink';
import Link from 'next/link';
import Padding from '@/ui_library/components/Padding';
import content from '../../../websiteContent';

const MEETING_HOUR = 18;
const MEETING_DAY_OF_THE_WEEK = 3;

const HeroSection = () => {
    const { ics, google } = getMeetingCalendarLink(MEETING_DAY_OF_THE_WEEK, MEETING_HOUR);
    return (
        <>
            <BackgroundImage />
            <Section fullScreen>
                <FlexContainer justifyContent="center" direction="column" fill>
                    <Padding horizontal="lg" vertical="none">
                        <FlexContainer gap="md" direction="column">
                            <Heading1>Collaborative Software Development Club @OSU</Heading1>
                            <FlexContainer direction="row" alignItems="start">
                                <Link href={ics}>
                                    <Subtitle>Enarson 348 Wednesdays 6pm</Subtitle>
                                </Link>
                            </FlexContainer>
                            <FlexContainer
                                direction={'row'}
                                alignItems="stretch"
                                convertToVerticalOnMobile
                            >
                                <JoinDiscordWrapper>
                                    <Button variant={'primary'} href={content.DISCORD_LINK}>
                                        Join Our Discord
                                    </Button>
                                </JoinDiscordWrapper>
                                <Button variant={'secondary'} href={content.MORE_INFO_LINK}>
                                    Learn More
                                </Button>
                            </FlexContainer>
                        </FlexContainer>
                    </Padding>
                </FlexContainer>
            </Section>
        </>
    );
};

export default HeroSection;
