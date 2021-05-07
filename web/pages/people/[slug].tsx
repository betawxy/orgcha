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
          className="flex flex-none w-20 h-20 rounded-full"
          src={person.image}
        />
        <div className="flex flex-grow items-center">
          <div className="ml-6 text-2xl text-gray-800">{person.name}</div>
        </div>
      </section>
      <section className="space-y-3">
        {personOrgs.map((node, k) => (
          <div className="bg-blue-50 py-6 rounded" key={k}>
            <div className="border-b border-blue-200">
              <div className="text-xl px-6 pb-3">
                <span>{node.role.name} - </span>
                <span className="beta-link">
                  <Link href={`/org/${node.org.slug}`}>{node.org.name}</Link>
                </span>
              </div>
            </div>
            {node.role.reportsToRoleSlugs.length > 0 && (
              <div className="px-6 mt-3">
                <div className="">Reports To</div>
                <ReportsToList node={node} />
              </div>
            )}
            {node.role.directReportsRoleSlugs.length > 0 && (
              <div className="px-6 mt-3">
                <div className="">Direct Reports</div>
                <ReportsList node={node} />
              </div>
            )}
          </div>
        ))}
      </section>
    </PageWrapper>
  );
}

const ReportsList = ({ node }: { node: TRoleNode }) => {
  return (
    <div className="flex flex-wrap">
      {node.role.directReportsRoleSlugs.map((s, key) => (
        <TeamMemberCard key={key} node={getRoleNode(getRole(s))} />
      ))}
    </div>
  );
};

const ReportsToList = ({ node }: { node: TRoleNode }) => {
  return (
    <div className="flex flex-wrap">
      {node.role.reportsToRoleSlugs.map((s, key) => (
        <TeamMemberCard key={key} node={getRoleNode(getRole(s))} />
      ))}
    </div>
  );
};
