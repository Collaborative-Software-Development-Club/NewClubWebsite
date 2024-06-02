import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Heading3 from '@/ui_library/components/Heading3';
import Padding from '@/ui_library/components/Padding';
import Section from '@/ui_library/components/Section';
import React from 'react';

const ProjectsSection = () => {
    return (
        <Section id="projects">
            {/* <Padding left="lg" top="md" bottom="lg" right="none"> */}
            <FlexContainer direction="column">
                <Padding vertical="sm" horizontal="lg">
                    <Heading3>{PROJECTS_HEADING}</Heading3>
                </Padding>
                <FlexContainer direction="column" scroll>
                    <Padding vertical="none" horizontal="lg">
                        <FlexContainer direction="row" alignItems="stretch" fill>
                            <ProjectCard {...BLOG_PROJECT} />
                            <ProjectCard {...TOWER_CONTROL_PROJECT} />
                        </FlexContainer>
                    </Padding>
                </FlexContainer>
            </FlexContainer>
            {/* </Padding> */}
        </Section>
    );
};

export default ProjectsSection;

const PROJECTS_HEADING = 'Our Projects';

const BLOG_PROJECT: ProjectCardProps = {
    title: 'Full-Stack Blog App',
    subtitle: 'Web Dev',
    tags: ['ReactJS', 'MongoDB', 'ExpressJS'],
    description:
        'During SP24, we built a blog app using React for the front-end and MongoDB for the Back-End. It includes a main feed, pages for each author, and a page for each blog with a comment section.',
    url: '',
};

const TOWER_CONTROL_PROJECT: ProjectCardProps = {
    title: 'Tower Control Game',
    subtitle: 'Game Dev',
    tags: ['Unity', 'C#'],
    description: 'During SP24, we worked on a tower control game developed with the Unity Engine.',
    url: '',
};
