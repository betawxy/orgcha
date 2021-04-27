import React from "react";
import Link from "next/link";

import PageWrapper from "components/pageWrapper";

export default function Index() {
  return (
    <PageWrapper>
      <div className="w-full my-3 p-6 bg-white rounded">
        <div className="text-3xl  text-center">
          Open org chart - focusing on the public sector
        </div>
      </div>
      <div className="space-y-3">
        <div className="">
          <span className="beta-link">
            <Link href="/org/us-federal-gov">US Federal Government</Link>
          </span>
        </div>
        <div className="">
          <span className="beta-link">
            <Link href="/org/facebook">Facebook</Link>
          </span>
        </div>
      </div>
    </PageWrapper>
  );
}
