import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PageWrapper from "components/pageWrapper";
import { getOrg, getOrgTeam, TOrg, TOPRel, TPerson } from "store/data";

export default function OrgPage() {
  const router = useRouter();
  const { slug } = router.query;

  const org: TOrg = getOrg(slug as string);
  if (!org) {
    return null;
  }
  const team: Array<[TOPRel, TPerson]> = getOrgTeam(slug as string);

  return (
    <PageWrapper>
      <OrgHeader org={org} />
      <section className="my-6 border-t border-blue-300">
        <div className="text-2xl mt-6 mb-3">About</div>
        <p>{org.about}</p>
      </section>
      <section className="my-6 border-t border-blue-300">
        <div className="text-2xl mt-6 mb-3">Team</div>
        <div className="flex">
          {team.map((pair, key) => (
            <TeamMemberCard key={key} oprel={pair[0]} person={pair[1]} />
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

const TeamMemberCard = ({
  oprel,
  person,
}: {
  oprel: TOPRel;
  person: TPerson;
}) => {
  return (
    <div className="flex w-1/4">
      <div className="flex-none w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
        <img className="object-fill" src={person.image} />
      </div>
      <div className="flex flex-grow items-center ml-4">
        <div>
          <div className="beta-link text-lg">
            <Link href={`/people/${person.slug}`}>{person.name}</Link>
          </div>
          <div className="text-gray-500">{oprel.role}</div>
        </div>
      </div>
    </div>
  );
};

const OrgHeader = ({ org }: { org: TOrg }) => {
  return (
    <section className="flex my-12">
      <img className="flex flex-none w-24 h-24 rounded" src={org.image} />
      <div className="flex flex-grow items-center">
        <div className="ml-6 text-3xl ml-10 text-gray-800">{org.name}</div>
      </div>
    </section>
  );
};
