export const stringHelpers = {
  clearPhone: (val: string) => {
    if (!val) return "";
    return val.replace(/\D+/g, "");
  },
};
