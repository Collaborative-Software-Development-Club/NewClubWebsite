import Button from '@/ui_components/Button'
import Heading2 from '@/ui_components/Heading2'
import Heading3 from '@/ui_components/Heading3'
import FlexContainer from '@/ui_components/FlexContainer'
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard'
import Section from '@/ui_components/Section'
import TextBulletedList from '@/ui_components/TextBulletedList'
import RotatingText from '@/ui_components/RotatingText'

const MoreInfoSection = () => {
    return (
        <>
            <Section id="info">
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
