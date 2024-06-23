import FlexContainer from '@/ui_library/components/FlexContainer';
import MemberCard from '@/components/MemberCard';
import Heading1 from '@/ui_library/components/Heading1';
import Padding from '@/ui_library/components/Padding';
import Heading2 from '@/ui_library/components/Heading2';
import { getOfficers } from '@/cms';
import content from '@/websiteContent';

export default async function MembersPage() {
    const membersData = await getOfficers();
    return (
        <>
            <FlexContainer direction="column" gap="sm" alignItems="stretch">
                <Padding vertical="none" horizontal="lg">
                    <Heading1>{content.MEMBERS_HEADING}</Heading1>
                </Padding>
                <Padding vertical="none" horizontal="lg">
                    <Heading2>{content.OFFICERS_HEADING}</Heading2>
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
                        {membersData.map((member) => {
                            return <MemberCard {...member} key={member.name} />;
                        })}
                    </FlexContainer>
                </Padding>
            </FlexContainer>
        </>
    );
}
