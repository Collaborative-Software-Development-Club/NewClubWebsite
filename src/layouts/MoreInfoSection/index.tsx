import Button from '@/ui_library/components/Button'
import FlexContainer from '@/ui_library/components/FlexContainer'
import Section from '@/ui_library/components/Section'
import RotatingText from './RotatingText'
import Padding from '@/ui_library/components/Padding'
import TextBulletedList from '@/ui_library/components/TextBulletedList'

const MoreInfoSection = () => {
    return (
        <>
            <Section id="info">
                <Padding top="none" bottom="sm" right="lg" left="lg">
                    <FlexContainer direction="column" alignItems="start">
                        <RotatingText />
                        <TextBulletedList bullets={BULLET_POINTS} />
                        <Button variant="secondary" href="">
                            {OFFICERS_CTA}
                        </Button>
                        {/* <Button variant={'terciary'} href={PROJECTS_LINK}>
                            {PROJECTS_CTA}
                        </Button> */}
                    </FlexContainer>
                </Padding>
            </Section>
        </>
    )
}

export default MoreInfoSection

const PROJECTS_LINK = '#projects'

const BULLET_POINTS = [
    'We are a student org focused on working in collaborative software development projects.',
    'Gain technical experience in software development as a way of building your portfolio.',
    'Learn skills and technologies valued by recruiters, like Unity, JavaScript, ReactJS, NextJS, and more.',
    'Work in collaborative projects through GitHub and increase commits.',
    'We accept members from all majors and skill levels.',
]
const OFFICERS_CTA = 'Meet our Officers ->'
const PROJECTS_CTA = 'See our Projects ->'
