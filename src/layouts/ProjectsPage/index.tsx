import { getProjects } from '@/cms';
import ProjectCard from '@/components/ProjectCard';
import Caroussel from '@/ui_library/components/Caroussel';
import FlexContainer from '@/ui_library/components/FlexContainer';
import Heading1 from '@/ui_library/components/Heading1';
import Heading2 from '@/ui_library/components/Heading2';
import Padding from '@/ui_library/components/Padding';
import content from '@/websiteContent';

export default async function ProjectsPage() {
    const projects = await getProjects();
    const games = projects.filter((project) => project.tags.includes('Unity'));
    const web = projects.filter((project) => project.tags.includes('React.js'));
    const others = projects.filter((project) => !games.includes(project) && !web.includes(project));
    return (
        <>
            <FlexContainer direction="column" gap="none" alignItems="stretch">
                <Padding vertical="none" horizontal="lg">
                    <Heading1>{content.PROJECTS_HEADING}</Heading1>
                </Padding>
                <FlexContainer direction="column" gap="none">
                    <Padding horizontal="lg" vertical="none">
                        <Heading2>Game Development</Heading2>
                    </Padding>
                    <Caroussel>
                        {games.map((project) => (
                            <ProjectCard {...project} key={project.title} />
                        ))}
                    </Caroussel>
                </FlexContainer>
                <FlexContainer direction="column" gap="none">
                    <Padding horizontal="lg" vertical="none">
                        <Heading2>Web Development</Heading2>
                    </Padding>
                    <Caroussel>
                        {web.map((project) => (
                            <ProjectCard {...project} key={project.title} />
                        ))}
                    </Caroussel>
                </FlexContainer>
                <FlexContainer direction="column" gap="none">
                    <Padding horizontal="lg" vertical="none">
                        <Heading2>Others</Heading2>
                    </Padding>
                    <Caroussel>
                        {others.map((project) => (
                            <ProjectCard {...project} key={project.title} />
                        ))}
                    </Caroussel>
                </FlexContainer>
            </FlexContainer>
        </>
    );
}
