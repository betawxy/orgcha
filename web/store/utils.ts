import { ROLES, ORGS, PERSONS } from "./data";
import { TRole, TOrg, TPerson, TRoleNode } from "./type";

export function getPopularOrgs(): Array<TOrg> {
  // return [ORGS["google"], ORGS["facebook"], ORGS["us-federal-gov"]];
  return Object.values(ORGS);
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
  if (!role) return null;
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
  let stack = [];

  const role = getRole(entryRoleSlug);
  if (!!role && role.orgSlug === org.slug) {
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
    for (let i = 0; i < stack.length; i++) {
      if (i === 0) {
        org.ocRootsRoleSlugs.forEach((s) => {
          if (s !== stack[i][0].role.slug) {
            const n = getRoleNode(getRole(s));
            if (!!n) {
              stack[i].push(n);
            }
          }
        });
      } else {
        stack[i - 1][0].role.directReportsRoleSlugs.forEach((s) => {
          if (s !== stack[i][0].role.slug) {
            const n = getRoleNode(getRole(s));
            if (!!n) {
              stack[i].push(n);
            }
          }
        });
      }
    }

    if (role.directReportsRoleSlugs.length > 0) {
      stack.push(
        role.directReportsRoleSlugs
          .map((s) => getRoleNode(getRole(s)))
          .filter((e) => !!e)
      );
    }
  }
  return stack;
}

export function getPersonOrgs(person: TPerson): Array<TRoleNode> {
  return person.roleSlugs.map((s) => getRoleNode(getRole(s)));
}
