import React, { Fragment } from "react";
import Link from "next/link";

import PageWrapper from "components/pageWrapper";
import { getOrg, getOrgChart } from "store/utils";
import { TOrg, TRoleNode } from "store/type";
import { BsChevronBarExpand } from "react-icons/bs";
import { useRouter } from "next/router";
import { OrgHeader } from ".";

export default function RolePage() {
  const router = useRouter();
  const { slug, roleSlug } = router.query;
  const org: TOrg = getOrg(slug as string);
  if (!org) {
    return null;
  }
  const oc: Array<TRoleNode[]> = getOrgChart(org, (roleSlug as string) || "");

  return (
    <PageWrapper>
      <OrgHeader org={org} />
      <section className="my-6 border-t border-blue-100">
        <div className="text-xl mt-6 mb-6">Org Chart</div>
        {oc.map((row, key) => (
          <Fragment key={key}>
            {key > 0 && row.length > 0 && (
              <div className="flex flex-col justify-center -mt-4">
                <div className="self-center h-4 border-l border-blue-400"></div>
                <div className="self-center w-full h-4 border-t border-l border-r border-blue-400 rounded-t-xl"></div>
              </div>
            )}
            <div className="-mt-4">
              <div className="flex flex-wrap w-full justify-center mt-6">
                {row.map((node, k) => (
                  <OCPersonCard
                    key={k}
                    node={node}
                    isCenterNode={!!node && node.role.slug === roleSlug}
                  />
                ))}
              </div>
            </div>
          </Fragment>
        ))}
      </section>
    </PageWrapper>
  );
}

export const OCPersonCard = ({
  node,
  isCenterNode,
}: {
  node: TRoleNode;
  isCenterNode: boolean;
}) => {
  if (!node) {
    return (
      <div className="flex flex-col flex-none w-1/3 px-6 pb-4 justify-center"></div>
    );
  }
  let color = isCenterNode ? "green" : "blue";
  let bgv = node.expanded ? "600" : "400";
  return (
    <div className="flex flex-col flex-none w-1/3 px-6 pb-4 justify-center">
      <div className="flex w-full bg-blue-50 hover:bg-blue-100 p-3 rounded">
        <div className="flex-none w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img className="object-fill" src={node.person.image} />
        </div>
        <div className="flex flex-grow items-center ml-4">
          <div>
            <div>
              <span className="beta-link">
                <Link href={`/people/${node.person.slug}`}>
                  {node.person.name}
                </Link>
              </span>
            </div>
            <div className="text-gray-600 text-sm line-clamp-1">
              {node.role.name}
            </div>
          </div>
        </div>
      </div>
      <Link href={`/org/${node.org.slug}/${node.role.slug}`}>
        <button
          className={`flex items-center self-center px-3 -mt-3  text-white text-sm rounded-xl focus:outline-none bg-${color}-${bgv} hover:bg-green-600`}
        >
          <div className="mr-2">{node.role.directReportsRoleSlugs.length}</div>
          <BsChevronBarExpand />
        </button>
      </Link>
    </div>
  );
};
