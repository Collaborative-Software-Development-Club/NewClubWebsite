import assert from 'assert';
import { MemberData } from '.';
import getOfficers from './getOfficers';

export default async function getMember(name: string): Promise<MemberData> {
    var members = await getOfficers('current');
    const previous = await getOfficers('previous');
    members.concat(previous)

    const found = members.find((member) => member.name === name);
    assert(found != undefined, `Member ${name} does not exist`);
    return found;
}
