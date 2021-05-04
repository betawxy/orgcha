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

export function getRoleNode(role: TRole): TRoleNode {
  return {
    role: role,
    org: ORGS[role.orgSlug],
    person: PERSONS[role.personSlug],
    expanded: false,
  };
}

export function getOrgKeyPeople(org: TOrg): Array<TRoleNode> {
  return org.roleSlugs.map((slug: string) => getRoleNode(getRole(slug)));
}

export function getOrgChart(
  org: TOrg,
  entryRoleSlug: string
): Array<TRoleNode[]> {
  const role = getRole(entryRoleSlug);
  if (!!role && role.orgSlug === org.slug) {
    let stack = [];
    let cur = role;
    while (!!cur) {
      let curNode = getRoleNode(cur);
      curNode.expanded = true;
      stack.push([curNode]);
      if (cur.reportsToRoleSlugs.length > 0) {
        cur = getRole(cur.reportsToRoleSlugs[0]);
      } else {
        cur = null;
      }
    }
    stack = stack.reverse();

    if (role.directReportsRoleSlugs.length > 0) {
      stack.push(
        role.directReportsRoleSlugs.map((s) => getRoleNode(getRole(s)))
      );
    }
    return stack;
  }
  const roots = org.ocRootsRoleSlugs.map((s) => getRoleNode(getRole(s)));
  const res = [roots];
  if (roots.length > 0 && roots[0].role.directReportsRoleSlugs.length > 0) {
    roots[0].expanded = true;
    res.push(
      roots[0].role.directReportsRoleSlugs.map((s) => getRoleNode(getRole(s)))
    );
  }
  return res;
}

export function getPersonOrgs(person: TPerson): Array<TRoleNode> {
  return person.roleSlugs.map((s) => getRoleNode(getRole(s)));
}
