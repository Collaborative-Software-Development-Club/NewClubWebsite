import ProjectCard from '@/components/ProjectCard';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Padding from '@/ui_library/components/Padding';
import Section from '@/ui_library/components/Section';
import React from 'react';
import content from '@/websiteContent';
import Heading2 from '@/ui_library/components/Heading2';
import { getProjects } from '@/cms';
import Caroussel from '@/ui_library/components/Caroussel';

export default async function ProjectsSection() {
    const projects = await getProjects();
    return (
        <Section id="projects">
            <FlexContainer direction="column" gap="none">
                <Padding top="md" bottom="none" right="lg" left="lg">
                    <Heading2>{content.PROJECTS_HEADING}</Heading2>
                </Padding>
            </FlexContainer>
            <Caroussel>
                {projects.map((project) => {
                    return <ProjectCard {...project} key={project.title} />;
                })}
            </Caroussel>
        </Section>
    );
}
