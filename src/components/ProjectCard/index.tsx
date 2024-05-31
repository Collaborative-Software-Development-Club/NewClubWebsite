import FlexContainer from '@/ui_components/FlexContainer'
import Button from '../../ui_components/Button'
import Card from '../../ui_components/Card'
import Paragraph from '../../ui_components/Paragraph'
import styles from './ProjectCard.module.css'
import Heading3 from '@/ui_components/Heading3'

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
            <FlexContainer justifyContent="space-between" direction="column" fill>
                <FlexContainer direction="column">
                    <Heading3>{props.title}</Heading3>
                    <FlexContainer direction="row" wrap gap="10px">
                        {props.tags.map((tag) => (
                            <div className={styles.tag}>{tag}</div>
                        ))}
                    </FlexContainer>
                    <Paragraph>{props.description}</Paragraph>
                </FlexContainer>
                <Button href={props.url} variant="primary" theme="light">
                    Check it out!
                </Button>
            </FlexContainer>
        </Card>
    )
}

export default ProjectCard
