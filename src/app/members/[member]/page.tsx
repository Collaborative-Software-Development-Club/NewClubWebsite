import { getMember, getOfficers } from '@/cms';
import MemberPage from '@/layouts/MemberPage';

export async function generateStaticParams() {
    const membersData = await getOfficers();
    console.log(membersData);
    return membersData.map((member) => {
        return {
            member: member.name,
        };
    });
}

export default async function Member({ params }: { params: { member: string } }) {
    console.log(`Getting member ${params.member}`);
    const member = await getMember(parseName(params.member));
    return (
        <main>
            <MemberPage {...member} />
        </main>
    );
}

function parseName(str: string) {
    return str.replace('%20', ' ');
}
