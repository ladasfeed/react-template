import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Input } from "components/ui/pure/Input";
import { Button } from "components/ui/pure/Button";

const fieldsNames = {
  phone: "phone",
};

const Login: FC = () => {
  const form = useForm();

  return (
    <>
      <Input.Numeric
        format={"+7 (###) ### ## ##"}
        placeholder={"Телефон"}
        control={form.control}
        name={fieldsNames.phone}
      />
      <Button>Продолжить</Button>
    </>
  );
};

export default {
  C: Login,
};
