import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";

import { TRoleNode } from "store/type";
import { getRoleNode, getPerson, getPersonOrgs, getRole } from "store/utils";
import { TeamMemberCard } from "pages/org/[slug]";

export default function PeoplePage() {
  const router = useRouter();
  const { slug } = router.query;

  const person = getPerson(slug as string);
  if (!person) {
    return null;
  }
  const personOrgs = getPersonOrgs(person);

  return (
    <PageWrapper>
      <section className="flex my-12">
        <img
          className="flex flex-none w-24 h-24 rounded-full"
          src={person.image}
        />
        <div className="flex flex-grow items-center">
          <div className="ml-6 text-3xl ml-10 text-gray-800">{person.name}</div>
        </div>
      </section>
      {personOrgs.map((node, k) => (
        <div className="my-6 border-t border-blue-300" key={k}>
          <div className="text-2xl mt-6 mb-3">
            <span>{node.role.name} - </span>
            <span className="beta-link">
              <Link href={`/org/${node.org.slug}`}>{node.org.name}</Link>
            </span>
          </div>
          {node.role.reportsToRoleSlugs.length > 0 && (
            <div className="bg-blue-100 rounded p-6 pt-1">
              <div className="my-6 text-lg">Reports To</div>
              <ReportsToList node={node} />
            </div>
          )}
          {node.role.directReportsRoleSlugs.length > 0 && (
            <div className="bg-blue-100 rounded p-6 pt-1">
              <div className="my-6 text-lg">Direct Reports</div>
              <ReportsList node={node} />
            </div>
          )}
        </div>
      ))}
    </PageWrapper>
  );
}

const ReportsList = ({ node }: { node: TRoleNode }) => {
  return (
    <div className="flex">
      {node.role.directReportsRoleSlugs.map((s, key) => (
        <TeamMemberCard key={key} node={getRoleNode(getRole(s))} />
      ))}
    </div>
  );
};

const ReportsToList = ({ node }: { node: TRoleNode }) => {
  return (
    <div className="flex">
      {node.role.reportsToRoleSlugs.map((s, key) => (
        <TeamMemberCard key={key} node={getRoleNode(getRole(s))} />
      ))}
    </div>
  );
};
