import FlexContainer from '@/ui_library/components/FlexContainer';
import MemberCard from '@/components/MemberCard';
import Heading1 from '@/ui_library/components/Heading1';
import Padding from '@/ui_library/components/Padding';
import content from '@/websiteContent';
import Heading2 from '@/ui_library/components/Heading2';

const MembersPage = () => {
    return (
        <>
            <FlexContainer direction="column" gap="sm" alignItems="stretch">
                <Padding vertical="none" horizontal="lg">
                    <Heading1>Our Members</Heading1>
                </Padding>
                <Padding vertical="none" horizontal="lg">
                    <Heading2>Officers</Heading2>
                </Padding>
                {/*                 <FlexContainer direction="column" fill>
                    <FlexContainer direction="row" fill scroll>
                        <Padding vertical="sm" horizontal="lg">
                            <FlexContainer direction="row" alignItems="stretch">
                                {content.OFFICERS.map((member) => {
                                    return <MemberCard {...member} />;
                                })}
                            </FlexContainer>
                        </Padding>
                    </FlexContainer>
                </FlexContainer> */}
                <Padding vertical="sm" horizontal="lg">
                    <FlexContainer direction="row" alignItems="center" wrap justifyContent="start">
                        {content.OFFICERS.map((member) => {
                            return <MemberCard {...member} />;
                        })}
                    </FlexContainer>
                </Padding>
            </FlexContainer>
        </>
    );
};

export default MembersPage;
