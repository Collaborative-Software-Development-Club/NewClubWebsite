import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard'
import FlexContainer from '@/ui_components/FlexContainer'
import Heading3 from '@/ui_components/Heading3'
import Section from '@/ui_components/Section'
import React from 'react'

const Projects = () => {
    return (
        <Section id="projects">
            <FlexContainer direction="column">
                <Heading3>{PROJECTS_HEADING}</Heading3>
                <FlexContainer direction="row" alignItems="stretch" fill scroll>
                    <ProjectCard {...BLOG_PROJECT} />
                    <ProjectCard {...TOWER_CONTROL_PROJECT} />
                </FlexContainer>
            </FlexContainer>
        </Section>
    )
}

export default Projects

const PROJECTS_HEADING = 'Our Projects'

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
