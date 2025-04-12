import { getMember, getOfficers } from '@/cms';
import parseUrlWithSpaces from '@/helpers/parseUrlWithSpaces';
import MemberPage from '@/layouts/MemberPage';

export async function generateStaticParams() {
    const membersData = await getOfficers('current');
    return membersData.map((member) => {
        return {
            member: member.name,
        };
    });
}

export default async function Member({ params }: { params: { member: string } }) {
    const member = await getMember(parseUrlWithSpaces(params.member));
    return (
        <main>
            <MemberPage {...member} />
        </main>
    );
}
