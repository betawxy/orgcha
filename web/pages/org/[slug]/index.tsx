import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";
import { TOrg, TRoleNode } from "store/type";
import { getOrg, getOrgChart, getOrgKeyPeople } from "store/utils";

export default function OrgPage() {
  const router = useRouter();
  const { slug } = router.query;

  const org: TOrg = getOrg(slug as string);
  if (!org) {
    return null;
  }
  const keyPeople: Array<TRoleNode> = getOrgKeyPeople(org);
  const oc: Array<TRoleNode[]> = getOrgChart(org);

  return (
    <PageWrapper>
      <OrgHeader org={org} />
      <section className="my-6 border-t border-blue-300">
        <div className="text-2xl mt-6 mb-3">About</div>
        <p>{org.about}</p>
      </section>
      <section className="my-6 border-t border-blue-300">
        <div className="text-2xl mt-6 mb-3">Key People</div>
        <div className="flex flex-wrap">
          {keyPeople.map((baseNode, key) => (
            <TeamMemberCard key={key} baseNode={baseNode} />
          ))}
        </div>
      </section>
      <section className="my-6 border-t border-blue-300">
        <div className="text-2xl mt-6 mb-6">Org Chart</div>
        {oc.map((row, key) => (
          <Fragment key={key}>
            {key > 0 && row.length > 0 && (
              <div className="flex flex-col justify-center -mt-4">
                <div className="self-center h-4 border-l border-blue-400"></div>
                <div className="self-center w-full h-4 border-t border-l border-r border-blue-400 rounded-b rounded-full"></div>
              </div>
            )}
            <div className="flex flex-wrap w-full justify-center -mt-4 hover:bg-blue-200 rounded">
              {row.map((baseNode, k) => (
                <OCPersonCard key={k} baseNode={baseNode} />
              ))}
            </div>
          </Fragment>
        ))}
      </section>
    </PageWrapper>
  );
}

export const TeamMemberCard = ({ baseNode }: { baseNode: TRoleNode }) => {
  return (
    <div className="flex flex-none w-1/3 my-3">
      <div className="flex-none w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
        <img className="object-fill" src={baseNode.person.image} />
      </div>
      <div className="flex flex-grow items-center ml-4">
        <div>
          <div>
            <span className="beta-link text-lg">
              <Link href={`/people/${baseNode.person.slug}`}>
                {baseNode.person.name}
              </Link>
            </span>
          </div>
          <div className="text-gray-500">{baseNode.role.name}</div>
        </div>
      </div>
    </div>
  );
};

export const OCPersonCard = ({ baseNode }: { baseNode: TRoleNode }) => {
  return (
    <div className="flex flex-col flex-none w-1/3 px-6 py-4 justify-center">
      <div className="flex w-full bg-blue-50 hover:bg-white p-3 rounded">
        <div className="flex-none w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img className="object-fill" src={baseNode.person.image} />
        </div>
        <div className="flex flex-grow items-center ml-4">
          <div>
            <div>
              <span className="beta-link">
                <Link href={`/people/${baseNode.person.slug}`}>
                  {baseNode.person.name}
                </Link>
              </span>
            </div>
            <div className="text-gray-600 text-sm">{baseNode.role.name}</div>
          </div>
        </div>
      </div>
      <button className="self-center px-2 -mt-3 bg-blue-400 text-white text-sm rounded-xl focus:outline-none">
        {baseNode.role.directReportsRoleSlugs.length}
      </button>
    </div>
  );
};

const OrgHeader = ({ org }: { org: TOrg }) => {
  return (
    <section className="flex my-12">
      <img
        className="flex flex-none w-24 h-24 rounded object-contain"
        src={org.image}
      />
      <div className="flex flex-grow items-center">
        <div className="ml-6 text-3xl ml-10 text-gray-800">{org.name}</div>
      </div>
    </section>
  );
};

/* 

7/1 2.25 apprasial fee + doc fee 59.5 495 21 3k

$3, 532;
$1500;

495;
20.7;

$822276
2.25%
?0.882 pt
10610 -> 

$3400

2.375 + 510

Narcun Jenkin
949 308 6935

*/
