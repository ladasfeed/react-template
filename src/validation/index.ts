import { builders } from "react-dev-starter-pack/dist";

export const YUP = builders.yup({
  text: {
    max: (val) => `Максимум ${val} символов`,
    min: (val) => `Минимум ${val} символов`,
    req: "Обязательное поле",
    email: "email",
  },
  customSchemas: (instance) => ({
    pass: instance.string().min(6, "Минимум 6"),
  }),
});
