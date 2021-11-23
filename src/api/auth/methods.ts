import { builders } from "react-dev-starter-pack";
import { authAxios } from "api/auth/index";
import { AuthApiTypes } from "api/auth/types";
import { stringHelpers } from "helpers/string";

const { api: buildApi } = builders;

class AuthApiCreator {
  user_id: string | null = null;

  getUser = buildApi(({ phone }: AuthApiTypes.getUserType) =>
    authAxios.get(`/user?phone_number=${stringHelpers.clearPhone(phone)}`)
  );
  create = buildApi(({ phone }: AuthApiTypes.create) =>
    authAxios.post("/user", {
      phone_number: stringHelpers.clearPhone(phone),
    })
  );

  code = buildApi((props: AuthApiTypes.getCode) =>
    authAxios.post(`/user/${this.user_id}/code`, {
      template: props.smsTemplate,
      target: "phone",
    })
  );

  verifyCode = buildApi((props: AuthApiTypes.verifyCode) =>
    authAxios.head(`/user/${this.user_id}/code/${props.code}`)
  );
  createPassword = buildApi(({ code, ...body }: AuthApiTypes.createPassword) =>
    authAxios.put(`/user/${this.user_id}/code/${code}`, body)
  );
  token = buildApi((body: AuthApiTypes.getToken) =>
    authAxios.post(`/user/${this.user_id}/token`, body)
  );
}

export const authApi = new AuthApiCreator();
