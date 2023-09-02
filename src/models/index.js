// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PetType = {
  "CAT": "CAT",
  "DOG": "DOG",
  "TURTLE": "TURTLE"
};

const { Pet } = initSchema(schema);

export {
  Pet,
  PetType
};