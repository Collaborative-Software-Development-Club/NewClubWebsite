import FlexContainer from '@/ui_components/FlexContainer'
import Button from '../../ui_components/Button'
import Card from '../../ui_components/Card'
import Heading4 from '../../ui_components/Heading4'
import Paragraph from '../../ui_components/Paragraph'
import styles from './ProjectCard.module.css'

export interface ProjectCardProps {
    title: string
    subtitle: string
    tags: string[]
    description: string
    url: string
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Card>
            <FlexContainer justifyContent="space-between" direction="column">
                <FlexContainer direction="column">
                    <Heading4>{props.title}</Heading4>
                    <FlexContainer direction="row" wrap>
                        {props.tags.map((tag) => (
                            <div className={styles.tag}>{tag}</div>
                        ))}
                    </FlexContainer>
                    <Paragraph>{props.description}</Paragraph>
                </FlexContainer>
                <Button href={props.url} variant="primary">
                    Check it out!
                </Button>
            </FlexContainer>
        </Card>
    )
}

export default ProjectCard
