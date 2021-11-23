import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { Input } from "components/ui/pure/Input";
import { Button } from "components/ui/pure/Button";
import { useDispatch } from "react-redux";
import { YUP } from "validation";
import { sagaActions } from "store/sagas/actions";
import { Form } from "core/Form";
import styles from "../index.module.css";

const fieldsNames = {
  phone: "phone",
};

type formType = {
  phone: string;
};

const scheme = YUP.create({
  [fieldsNames.phone]: YUP.schemas.min(18),
});

const Login: FC = () => {
  const form = useForm({
    resolver: YUP.resolver(scheme),
    reValidateMode: "onSubmit",
  });
  const dispatch = useDispatch();

  const submit = ({ phone }: formType) => {
    dispatch(sagaActions.auth.getUser({ phone }));
  };

  return (
    <>
      <Form className={styles.form} submit={submit} {...form}>
        <Input.Numeric
          format={"+7 (###) ### ## ##"}
          placeholder={"Телефон"}
          mask={""}
          allowEmptyFormatting={false}
          error={form.formState?.errors[fieldsNames.phone]?.message}
          control={form.control}
          name={fieldsNames.phone}
        />
        <Button>Продолжить</Button>
      </Form>
    </>
  );
};

export default {
  C: Login,
};
