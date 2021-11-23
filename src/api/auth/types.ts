export namespace AuthApiTypes {
  export type getUserType = {
    phone: string;
  };
  export type create = {
    phone: string;
  };
  export type createPassword = {
    code: string;
    password: string;
    password_confirm: string;
  };
  export type getCode = {
    smsTemplate: "register" | "restore";
    restore?: boolean;
  };
  export type verifyCode = {
    code: string;
    restore?: boolean;
  };
  export type getToken = {
    password: string;
  };
}
