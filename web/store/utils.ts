import { ROLES, ORGS, PERSONS } from "./data";
import { TRole, TOrg, TPerson, TRoleNode } from "./type";

export function getPopularOrgs(): Array<TOrg> {
  return [ORGS["google"], ORGS["facebook"], ORGS["us-federal-gov"]];
}

export function getOrg(slug: string): TOrg {
  return ORGS[slug];
}

export function getPerson(slug: string): TPerson {
  return PERSONS[slug];
}

export function getRole(slug: string): TRole {
  return ROLES[slug];
}

export function getBaseRoleNode(role: TRole): TRoleNode {
  return {
    role: role,
    org: ORGS[role.orgSlug],
    person: PERSONS[role.personSlug],
    parents: [],
    children: [],
  };
}

export function getRoleNode(role: TRole): TRoleNode {
  let res = getBaseRoleNode(role);
  res.parents = role.reportsToRoleSlugs.map((s) => getBaseRoleNode(getRole(s)));
  res.children = role.directReportsRoleSlugs.map((s) =>
    getBaseRoleNode(ROLES[s])
  );
  return res;
}

export function getOrgKeyPeople(org: TOrg): Array<TRoleNode> {
  return org.roleSlugs.map((slug: string) => getBaseRoleNode(getRole(slug)));
}

export function getOrgRoots(org: TOrg): Array<TRoleNode> {
  return org.ocRootsRoleSlugs.map((s) => getRoleNode(getRole(s)));
}

export function getPersonOrgs(person: TPerson): Array<TRoleNode> {
  return person.roleSlugs.map((s) => getRoleNode(getRole(s)));
}
