import React from "react";
import Link from "next/link";

import PageWrapper from "components/pageWrapper";
import { getPopularOrgs, TOrg } from "store/data";

export default function Index() {
  const popularOrgs = getPopularOrgs();
  return (
    <PageWrapper>
      <div className="mt-10 space-y-6">
        {popularOrgs.map((org, key) => (
          <OrgCard key={key} org={org} />
        ))}
      </div>
    </PageWrapper>
  );
}

const OrgCard = ({ org }: { org: TOrg }) => {
  return (
    <div className="flex">
      <img className="flex flex-none w-12 h-12 rounded" src={org.image} />
      <div className="flex-grow ml-5">
        <div className="">
          <span className="beta-link text-xl">
            <Link href={`/org/${org.slug}`}>{org.name}</Link>
          </span>
        </div>
        <div className="text-sm line-clamp-2">{org.about}</div>
      </div>
    </div>
  );
};
