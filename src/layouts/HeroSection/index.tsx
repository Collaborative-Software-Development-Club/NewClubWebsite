import Button from '@/ui_components/Button'
import FlexContainer from '@/ui_components/FlexContainer'
import Heading1 from '@/ui_components/Heading1'
import Section from '@/ui_components/Section'
import Subtitle from '@/ui_components/Subtitle'
import BackgroundImage from '@/components/BackgroundImage'
import JoinDiscordWrapper from './JoinDiscordWrapper'
import useMeetingCalendarLink from '@/hooks/useMeetingCalendarLink'
import Link from 'next/link'

const DISCORD_LINK = 'https://discord.gg/tt4ds3MF'
const MORE_INFO_LINK = '#info'

const HeroSection = () => {
    const {ics, google} = useMeetingCalendarLink()
    return (
        <>
            <Section>
                <FlexContainer justifyContent="center" direction="column" fill>
                    <Heading1>Collaborative Software Development Club @OSU</Heading1>
                    <FlexContainer direction='row' alignItems='start'>
                        <Link href={ics}><Subtitle>Enarson 348 Wednesdays 7pm</Subtitle></Link>
                    </FlexContainer>
                    <FlexContainer direction={'row'} alignItems="stretch" convertToVerticalOnMobile>
                        <JoinDiscordWrapper>
                            <Button variant={'primary'} href={DISCORD_LINK}>
                                Join Our Discord
                            </Button>
                        </JoinDiscordWrapper>
                        <Button variant={'secondary'} href={MORE_INFO_LINK}>
                            Learn More
                        </Button>
                    </FlexContainer>
                </FlexContainer>
            </Section>
            <BackgroundImage />
        </>
    )
}

export default HeroSection
