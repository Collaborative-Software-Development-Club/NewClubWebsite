import FlexContainer from '@/ui_library/components/FlexContainer';
import Paragraph from '@/ui_library/components/Paragraph';
import Padding from '@/ui_library/components/Padding';
import MemberPhoto from '@/components/MemberCard/MemberCardPhoto';
import Heading1 from '@/ui_library/components/Heading1';
import styles from './MemberInfo.module.css';
import Card from '@/ui_library/components/Card';
import MemberPagePhoto from './MemberPagePhoto';

interface MemberPageProps {
    name: string;
    description: string;
    photoUrl: string;
    position: string;
}

const MemberPage = (props: MemberPageProps) => {
    return (
        <Padding horizontal="lg" vertical="none">
            <FlexContainer
                direction="row"
                gap="lg"
                justifyContent="start"
                convertToVerticalOnMobile
            >
                <FlexContainer direction="row">
                    <MemberPagePhoto src={props.photoUrl} />
                </FlexContainer>

                <FlexContainer direction="column" justifyContent="center">
                    <Heading1>{props.name}</Heading1>
                    <Paragraph>{`Position: ${props.position}`}</Paragraph>
                    <Paragraph>{props.description}</Paragraph>
                </FlexContainer>
            </FlexContainer>
        </Padding>
    );
};

export default MemberPage;
