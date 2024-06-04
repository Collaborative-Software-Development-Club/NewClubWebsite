import MemberPage from '@/layouts/MemberPage';
import Paragraph from '@/ui_library/components/Paragraph';
import content from '@/websiteContent';

export default function Member({ params }: { params: { member: string } }) {
    console.log('looking for member ' + params.member);
    const possibleMembers = content.OFFICERS.filter(
        (officer) => officer.name === parseName(params.member),
    );
    console.log(possibleMembers);
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
