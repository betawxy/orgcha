import { TRole, TOrg, TPerson } from "./type";
import { res as DATA } from "./res";

export const DEFAULT_USER_ICON =
  "https://freesvg.org/img/abstract-user-flat-1.png";

export const ROLES = DATA["ROLES"];
export const ORGS = DATA["ORGS"];
export const PERSONS = DATA["PERSONS"];

// export const ROLES: { [key: string]: TRole } = {
//   "facebook_mark-zuckerberg-S8r3": {
//     slug: "facebook_mark-zuckerberg-S8r3",
//     orgSlug: "facebook",
//     personSlug: "mark-zuckerberg-S8r3",
//     name: "Founder, President & CEO",
//     directReportsRoleSlugs: [
//       "facebook_sheryl-sandberg-da1f",
//       "facebook_chris-cox-89as",
//       "facebook_mike-schroepfer-1sa0",
//     ],
//     reportsToRoleSlugs: [],
//   },
//   "facebook_chris-cox-89as": {
//     slug: "facebook_chris-cox-89as",
//     orgSlug: "facebook",
//     personSlug: "chris-cox-89as",
//     name: "CPO",
//     directReportsRoleSlugs: [],
//     reportsToRoleSlugs: ["facebook_mark-zuckerberg-S8r3"],
//   },
//   "facebook_sheryl-sandberg-da1f": {
//     slug: "facebook_sheryl-sandberg-da1f",
//     orgSlug: "facebook",
//     personSlug: "sheryl-sandberg-da1f",
//     name: "COO",
//     directReportsRoleSlugs: [],
//     reportsToRoleSlugs: ["facebook_mark-zuckerberg-S8r3"],
//   },
//   "facebook_mike-schroepfer-1sa0": {
//     slug: "facebook_mike-schroepfer-1sa0",
//     orgSlug: "facebook",
//     personSlug: "mike-schroepfer-1sa0",
//     name: "CTO",
//     directReportsRoleSlugs: ["facebook_andrew-bosworth-8923"],
//     reportsToRoleSlugs: ["facebook_mark-zuckerberg-S8r3"],
//   },
//   "facebook_andrew-bosworth-8923": {
//     slug: "facebook_andrew-bosworth-8923",
//     orgSlug: "facebook",
//     personSlug: "andrew-bosworth-8923",
//     name: "Head of Facebook Reality Labs",
//     directReportsRoleSlugs: [],
//     reportsToRoleSlugs: ["facebook_mike-schroepfer-1sa0"],
//   },
//   "czi_mark-zuckerberg-S8r3": {
//     slug: "czi_mark-zuckerberg-S8r3-zuckerberg-S8r3",
//     orgSlug: "czi",
//     personSlug: "mark-zuckerberg-S8r3",
//     name: "Founder",
//     directReportsRoleSlugs: [],
//     reportsToRoleSlugs: [],
//   },
//   "us-federal-gov_joe-biden-9123": {
//     slug: "us-federal-gov_joe-biden-9123",
//     orgSlug: "us-federal-gov",
//     personSlug: "joe-biden-9123",
//     name: "President",
//     directReportsRoleSlugs: [],
//     reportsToRoleSlugs: [],
//   },
//   "google_sundar-pichai-124a": {
//     slug: "google_sundar-pichai-124a",
//     orgSlug: "google",
//     personSlug: "sundar-pichai-124a",
//     name: "CEO",
//     directReportsRoleSlugs: [],
//     reportsToRoleSlugs: [],
//   },
// };

// export const ORGS: { [key: string]: TOrg } = {
//   facebook: {
//     slug: "facebook",
//     name: "Facebook, Inc.",
//     about:
//       "Founded in 2004, Facebook’s mission is to give people the power to build community and bring the world closer together. Over 2 billion people use Facebook, Instagram, WhatsApp, or Messenger every month to stay connected with friends and family, to discover what’s going on in the world, and to share and express what matters to them.",
//     roleSlugs: [
//       "facebook_mark-zuckerberg-S8r3",
//       "facebook_sheryl-sandberg-da1f",
//       "facebook_chris-cox-89as",
//       "facebook_mike-schroepfer-1sa0",
//       "facebook_andrew-bosworth-8923",
//     ],
//     image:
//       "https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512",
//     ocRootsRoleSlugs: ["facebook_mark-zuckerberg-S8r3"],
//   },
//   czi: {
//     slug: "czi",
//     name: "Chan Zuckerberg Initiative",
//     about:
//       "The Chan Zuckerberg Initiative was founded in 2015 to leverage technology, community-driven solutions and collaboration to help solve some of society’s toughest challenges. Our mission is to build a more inclusive, just, and healthy future for everyone.",
//     roleSlugs: ["czi_mark-zuckerberg-S8r3"],
//     image:
//       "https://chanzuckerberg.com/wp-content/themes/czi/img/logo-minified.svg",
//     ocRootsRoleSlugs: ["facebook_mark-zuckerberg-S8r3"],
//   },
//   "us-federal-gov": {
//     slug: "us-federal-gov",
//     name: "Federal government of the United States",
//     about:
//       "The federal government of the United States is the national government of the United States, a federal republic in North America, composed of 50 states, a federal district, five major self-governing territories and several island possessions.",
//     roleSlugs: ["us-federal-gov_joe-biden-9123"],
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/5/5b/Greater_coat_of_arms_of_the_United_States.svg",
//     ocRootsRoleSlugs: ["us-federal-gov_joe-biden-9123"],
//   },
//   google: {
//     slug: "google",
//     name: "Google LLC",
//     about:
//       "Our mission is to organize the world’s information and make it universally accessible and useful.",
//     roleSlugs: ["google_sundar-pichai-124a"],
//     image:
//       "https://www.gstatic.com/images/branding/googleg/2x/googleg_standard_color_120dp.png",
//     ocRootsRoleSlugs: ["google_sundar-pichai-124a"],
//   },
// };

// export const PERSONS: { [key: string]: TPerson } = {
//   "mark-zuckerberg-S8r3": {
//     slug: "mark-zuckerberg-S8r3",
//     name: "Mark Zuckerberg",
//     roleSlugs: ["facebook_mark-zuckerberg-S8r3", "czi_mark-zuckerberg-S8r3"],
//     image:
//       "https://pbs.twimg.com/profile_images/378800000639973627/f5513282d87d24168fd8f83daf7ebca0.jpeg",
//     social: {
//       linkedin: "",
//     },
//   },
//   "sheryl-sandberg-da1f": {
//     slug: "sheryl-sandberg-da1f",
//     name: "Sheryl Sandberg",
//     roleSlugs: ["facebook_sheryl-sandberg-da1f"],
//     image:
//       "https://mk0globalleaderbprs8.kinstacdn.com/wp-content/uploads/2018/05/Sheryl_Sandberg-128x128.png",
//     social: {
//       linkedin: "",
//     },
//   },
//   "chris-cox-89as": {
//     slug: "chris-cox-89as",
//     name: "Chris Cox",
//     roleSlugs: ["facebook_chris-cox-89as"],
//     image:
//       "https://www.industryleadersmagazine.com/wp-content/uploads/2020/06/Chris-Cox.jpg",
//     social: {
//       linkedin: "https://www.linkedin.com/in/chris-cox-2896b841",
//     },
//   },
//   "mike-schroepfer-1sa0": {
//     slug: "mike-schroepfer-1sa0",
//     name: "Mike Schroepfer",
//     roleSlugs: ["facebook_mike-schroepfer-1sa0"],
//     image:
//       "https://pbs.twimg.com/profile_images/1210715117005889542/qe4GSFW5.jpg",
//     social: {
//       linkedin: "https://www.linkedin.com/in/schrep",
//     },
//   },
//   "andrew-bosworth-8923": {
//     slug: "andrew-bosworth-8923",
//     name: "Andrew Bosworth",
//     roleSlugs: ["facebook_andrew-bosworth-8923"],
//     image: DEFAULT_USER_ICON,
//     social: {
//       linkedin: "",
//     },
//   },
//   "joe-biden-9123": {
//     slug: "joe-biden-9123",
//     name: "Joe Biden",
//     roleSlugs: ["us-federal-gov_joe-biden-9123"],
//     image:
//       "https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_3095,w_3095,x_332,y_-1/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1584982783/RTS35TX1_d9m7qp",
//     social: {
//       linkedin: "",
//     },
//   },
//   "sundar-pichai-124a": {
//     slug: "sundar-pichai-124a",
//     name: "Sundar Pichai",
//     roleSlugs: ["google_sundar-pichai-124a"],
//     image:
//       "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
//     social: {
//       linkedin: "",
//     },
//   },
// };
