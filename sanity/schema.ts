import { type SchemaTypeDefinition } from "sanity";
import pet from "./schema/pet";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet],
};
