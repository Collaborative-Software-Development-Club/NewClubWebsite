import FlexContainer from '@/ui_library/components/FlexContainer';
import Button from '../../ui_library/components/Button';
import Card from '../../ui_library/components/Card';
import Paragraph from '../../ui_library/components/Paragraph';
import styles from './ProjectCard.module.css';
import Heading3 from '@/ui_library/components/Heading3';
import Padding from '@/ui_library/components/Padding';

export interface ProjectCardProps {
    title: string;
    tags: string[];
    description: string;
    url: string;
    playUrl?: string;
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Card width="380px">
            <Padding>
                <FlexContainer justifyContent="space-between" direction="column" fill>
                    <FlexContainer direction="column" gap="sm">
                        <Heading3>{props.title}</Heading3>
                        <FlexContainer direction="row" wrap gap="sm">
                            {props.tags.map((tag) => (
                                <div className={styles.tag} key={tag}>
                                    {tag}
                                </div>
                            ))}
                        </FlexContainer>
                        <Paragraph>{props.description}</Paragraph>
                    </FlexContainer>
                    <FlexContainer direction="column" gap="sm">
                        <Button href={props.url} variant="secondary" newTab>
                            See the code
                        </Button>
                        {props.playUrl && (
                            <Button href={`/play/${props.playUrl}`} variant="primary">
                                Play
                            </Button>
                        )}
                    </FlexContainer>
                </FlexContainer>
            </Padding>
        </Card>
    );
};

export default ProjectCard;
