import { getMember } from '@/cms';
import MemberPage from '@/layouts/MemberPage';
import MembersPage from '@/layouts/MembersPage';
import Paragraph from '@/ui_library/components/Paragraph';
import content from '@/websiteContent';

export default async function Member({ params }: { params: { member: string } }) {
    const member = await getMember(parseName(params.member));
    if (!member) {
        return <Paragraph>Member not found</Paragraph>;
    }
    return (
        <main>
            <MemberPage {...member} />
        </main>
    );
}

function parseName(str: string) {
    return str.replace('%20', ' ');
}
