import assert from 'assert';
import { MemberData } from '.';
import getOfficers from './getOfficers';

export default async function getMember(name: string): Promise<MemberData> {
    const members = await getOfficers();

    const found = members.find((member) => member.name === name);
    assert(found != undefined, `Member ${name} does not exist`);
    return found;
}
