import MemberPage from '@/layouts/MemberInfo';
import MembersPage from '@/layouts/MembersPage';
import Paragraph from '@/ui_library/components/Paragraph';
import content from '@/websiteContent';

export default function Member({ params }: { params: { member: string } }) {
    const possibleMembers = content.OFFICERS.filter(
        (officer) => officer.name === parseName(params.member),
    );
    if (possibleMembers.length === 0) {
        return <Paragraph>Member not found</Paragraph>;
    }
    const member = possibleMembers[0];
    return (
        <main>
            <MemberPage {...member} />
        </main>
    );
}

function parseName(str: string) {
    return str.replace('%20', ' ');
}
