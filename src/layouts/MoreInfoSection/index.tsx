import Button from '@/ui_components/Button'
import Heading2 from '@/ui_components/Heading2'
import Heading3 from '@/ui_components/Heading3'
import FlexContainer from '@/ui_components/FlexContainer'
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard'
import Section from '@/ui_components/Section'
import TextBulletedList from '@/ui_components/TextBulletedList'
import RotatingText from '@/ui_components/RotatingText'
import Subtitle from '@/ui_components/Subtitle'
import Heading1 from '@/ui_components/Heading1'

const MoreInfoSection = () => {
    return (
        <Section id="info">
            <FlexContainer direction={'row'} gap="2rem" convertToVerticalOnMobile>
                <FlexContainer direction="column" alignItems="start">
                    <RotatingText />
                    <TextBulletedList bullets={BULLET_POINTS} />
                    <Button variant="secondary" href="">
                        {OFFICERS_CTA}
                    </Button>
                    <Button variant={'terciary'} href="">
                        {PROJECTS_CTA}
                    </Button>
                </FlexContainer>
                <FlexContainer direction="column">
                    <Heading3>{PROJECTS_HEADING}</Heading3>
                    <FlexContainer direction="row" alignItems="stretch" scroll>
                        <ProjectCard {...BLOG_PROJECT} />
                        <ProjectCard {...TOWER_CONTROL_PROJECT} />
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Section>
    )
}

export default MoreInfoSection

const BULLET_POINTS = [
    'We are a student org focused on working in collaborative software development projects.',
    'Gain technical experience in software development as a way of building your portfolio.',
    'Learn skills and technologies valued by recruiters, like Unity, JavaScript, ReactJS, NextJS, and more.',
    'Work in collaborative projects through GitHub and increase commits.',
    'We accept members from all majors and skill levels.',
]
const OFFICERS_CTA = 'Meet our Officers ->'
const PROJECTS_CTA = 'See our Projects ->'
const PROJECTS_HEADING = 'Current Projects'

const BLOG_PROJECT: ProjectCardProps = {
    title: 'Full-Stack Blog App',
    subtitle: 'Web Dev',
    tags: ['ReactJS', 'MongoDB', 'ExpressJS'],
    description:
        'During SP24, we built a blog app using React for the front-end and MongoDB for the Back-End. It includes a main feed, pages for each author, and a page for each blog with a comment section.',
    url: '',
}

const TOWER_CONTROL_PROJECT: ProjectCardProps = {
    title: 'Tower Control Game',
    subtitle: 'Game Dev',
    tags: ['Unity', 'C#'],
    description: 'During SP24, we worked on a tower control game developed with the Unity Engine.',
    url: '',
}
