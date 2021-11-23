import { builders } from "react-dev-starter-pack";
import { authAxios } from "api/auth/index";
import { AuthApiTypes } from "api/auth/types";

const { api: buildApi } = builders;

class AuthApiCreator {
  user_id: string | null = null;

  getUser = buildApi((params: AuthApiTypes.getUserType) =>
    authAxios.get(`/user`)
  );
}

export const authApi = new AuthApiCreator();
