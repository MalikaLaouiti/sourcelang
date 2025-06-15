import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export default createClient({
  projectId,
  apiVersion,
  dataset,
});
