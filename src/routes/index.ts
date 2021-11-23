import { builders } from "react-dev-starter-pack";

export const routes = builders.router({
  sandbox: "/sandbox",
  auth: {
    login: "/login",
    password: "/password",
  },
});
