import { MemberData } from '.';
import getOfficers from './getOfficers';

export default async function getMember(name: string): Promise<MemberData | undefined> {
    const members = await getOfficers();
    return members.find((member) => member.name === name);
}
