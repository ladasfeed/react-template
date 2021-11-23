import { builders } from "react-dev-starter-pack/dist";

export const YUP = builders.yup({
  text: {
    max: () => "Max",
    min: () => "Min",
    req: "Req",
    email: "Email",
  },
  customSchemas: {},
});
