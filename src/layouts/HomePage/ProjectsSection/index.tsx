import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Heading3 from '@/ui_library/components/Heading3';
import Padding from '@/ui_library/components/Padding';
import Section from '@/ui_library/components/Section';
import React from 'react';
import content from '@/websiteContent';
import Heading2 from '@/ui_library/components/Heading2';

const ProjectsSection = () => {
    return (
        <Section id="projects">
            {/* <Padding left="lg" top="md" bottom="lg" right="none"> */}
            <FlexContainer direction="column" gap="none">
                <Padding top="md" bottom="none" right="lg" left="lg">
                    <Heading2>{content.PROJECTS_HEADING}</Heading2>
                </Padding>
                <FlexContainer direction="column" fill>
                    <FlexContainer direction="row" fill scroll>
                        <Padding vertical="lg" horizontal="lg">
                            <FlexContainer direction="row" alignItems="stretch">
                                {content.PROJECTS.map((project) => {
                                    return <ProjectCard {...project} />;
                                })}
                            </FlexContainer>
                        </Padding>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
            {/* </Padding> */}
        </Section>
    );
};

export default ProjectsSection;
