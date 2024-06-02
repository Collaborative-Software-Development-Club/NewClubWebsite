import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Heading3 from '@/ui_library/components/Heading3';
import Padding from '@/ui_library/components/Padding';
import Section from '@/ui_library/components/Section';
import React from 'react';
import content from '@/websiteContent';

const ProjectsSection = () => {
    return (
        <Section id="projects">
            {/* <Padding left="lg" top="md" bottom="lg" right="none"> */}
            <FlexContainer direction="column">
                <Padding vertical="sm" horizontal="lg">
                    <Heading3>{content.PROJECTS_HEADING}</Heading3>
                </Padding>
                <FlexContainer direction="column" scroll>
                    <Padding vertical="none" horizontal="lg">
                        <FlexContainer direction="row" alignItems="stretch" fill>
                            {content.PROJECTS.map((project) => {
                                return <ProjectCard {...project} />;
                            })}
                        </FlexContainer>
                    </Padding>
                </FlexContainer>
            </FlexContainer>
            {/* </Padding> */}
        </Section>
    );
};

export default ProjectsSection;
