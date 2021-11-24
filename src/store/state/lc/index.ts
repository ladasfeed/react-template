import { builders } from "react-dev-starter-pack";

export const lcController = builders.localStorage<{
  id: string;
  user: {
    name: string;
    age: number;
  };
}>();
