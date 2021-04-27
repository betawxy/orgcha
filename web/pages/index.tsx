import React from "react";
import Link from "next/link";

import PageWrapper from "components/pageWrapper";
import { getPopularOrgs } from "store/data";

export default function Index() {
  const popularOrgs = getPopularOrgs();
  return (
    <PageWrapper>
      <div className="w-full my-3 p-6 bg-white rounded">
        <div className="text-3xl  text-center">
          Open org chart - focusing on the public sector
        </div>
      </div>
      <div className="space-y-3">
        {popularOrgs.map((org, key) => (
          <div key={key} className="">
            <span className="beta-link">
              <Link href={`/org/${org.slug}`}>{org.name}</Link>
            </span>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
