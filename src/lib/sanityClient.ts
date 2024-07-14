import { createClient } from "next-sanity";
import { apiVersion } from "../../sanity/env";

export const client = createClient({
  apiVersion: apiVersion,
  token: process.env.SANITY_ACCESS_TOKEN,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
});
