import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";
import { TOrg, TRoleNode } from "store/type";
import { getOrg, getOrgKeyPeople } from "store/utils";

export default function OrgPage() {
  const router = useRouter();
  const { slug } = router.query;
  const org: TOrg = getOrg(slug as string);
  if (!org) {
    return null;
  }
  const keyPeople: Array<TRoleNode> = getOrgKeyPeople(org);

  return (
    <PageWrapper>
      <OrgHeader org={org} />
      <section className="my-6 border-t border-blue-100">
        <div className="text-xl mt-6 mb-3">Key People</div>
        <div className="flex flex-wrap">
          {keyPeople.map((node, key) => (
            <TeamMemberCard key={key} node={node} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

export const TeamMemberCard = ({ node }: { node: TRoleNode }) => {
  return (
    <div className="flex flex-none w-1/4 my-3">
      <div className="flex-none w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
        <img className="object-fill" src={node.person.image} />
      </div>
      <div className="flex flex-grow items-center ml-4">
        <div>
          <div>
            <span className="beta-link text-sm">
              <Link href={`/people/${node.person.slug}`}>
                {node.person.name}
              </Link>
            </span>
          </div>
          <div className="beta-link inline-block text-gray-500 text-xs">
            <Link href={`/org/${node.org.slug}/${node.role.slug}`}>
              {node.role.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OrgHeader = ({ org }: { org: TOrg }) => {
  return (
    <>
      <section className="flex my-12">
        <img
          className="flex flex-none w-20 h-20 rounded object-contain"
          src={org.image}
        />
        <div className="flex flex-grow items-center">
          <div className="beta-link ml-6 text-2xl">
            <Link href={`/org/${org.slug}`}>{org.name}</Link>
          </div>
        </div>
      </section>
      <section className="my-6 border-t border-blue-100">
        <div className="text-xl mt-6 mb-3">About</div>
        <div className="">{org.about}</div>
      </section>
    </>
  );
};
