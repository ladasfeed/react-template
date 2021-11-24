import { AxiosResponse } from "axios";

export const errorMapper = (response: any) => {
  const errorsFromServer = response?.data?.data?.errors;
  if (!Array.isArray(errorsFromServer)) return {};

  let errorsObject: any = {};
  errorsFromServer.forEach((item: any) => {
    if (!item?.field) {
      return;
    }
    const indexOfDots = item.message.indexOf(":");
    const fieldName = item.field.substr(item.field.lastIndexOf(".") + 1);
    errorsObject[fieldName] = indexOfDots
      ? item.message.substr(indexOfDots + 2)
      : item.message;
  });
  return errorsObject;
};

export const getFirstErrorFromResponse = (res: AxiosResponse<any>) => {
  try {
    const errorMessage = res?.data?.data?.errors[0]?.message;
    if (!errorMessage) {
      return "";
    }
    const indexOfDots = errorMessage.indexOf(":");
    return errorMessage.substr(indexOfDots + 1);
  } catch (e) {
    console.log(e);
    return "";
  }
};
