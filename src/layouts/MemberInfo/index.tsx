import FlexContainer from '@/ui_library/components/FlexContainer';
import Paragraph from '@/ui_library/components/Paragraph';
import Padding from '@/ui_library/components/Padding';
import MemberPhoto from '@/components/MemberCard/MemberPhoto';
import Heading1 from '@/ui_library/components/Heading1';
import styles from './MemberInfo.module.css';
import Card from '@/ui_library/components/Card';

interface MemberPageProps {
    name: string;
    description: string;
    photo: string;
    position: string;
}

const NUMBER_OF_CHARACTERS_IN_DESCRIPTION = 300;
const MemberPage = (props: MemberPageProps) => {
    return (
        <Padding horizontal="lg" vertical="none">
            <FlexContainer direction="column" gap="lg" justifyContent="center" fill>
                <FlexContainer direction="row">
                    <MemberPhoto src={props.photo} />
                    <FlexContainer direction="column" justifyContent="center">
                        <Heading1>{props.name}</Heading1>
                        <Paragraph>{`Position: ${props.position}`}</Paragraph>
                    </FlexContainer>
                </FlexContainer>
                <Paragraph>{props.description}</Paragraph>
            </FlexContainer>
        </Padding>
    );
};

export default MemberPage;
