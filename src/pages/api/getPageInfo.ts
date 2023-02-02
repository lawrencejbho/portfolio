import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { PageInfo } from "../../../typings";

// make sure to use [0] here so that you'll grab the first in the index.  You'll run into type errors if you try to use [0] later on in the react components.
const query = groq`
    *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
