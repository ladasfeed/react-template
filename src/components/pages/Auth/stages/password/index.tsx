import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { YUP } from "validation";
import { useDispatch } from "react-redux";
import { sagaActions } from "store/sagas/actions";
import { Form } from "core/Form";
import styles from "components/pages/Auth/index.module.css";
import { Input } from "components/ui/pure/Input";
import { Button } from "components/ui/pure/Button";

const fieldsNames = {
  password: "password",
};

type formType = {
  password: string;
};

const scheme = YUP.create({
  [fieldsNames.password]: YUP.schemas.pass,
});

export default function () {
  const form = useForm({
    resolver: YUP.resolver(scheme),
    reValidateMode: "onSubmit",
  });
  const dispatch = useDispatch();

  const submit = ({ password }: formType) => {
    dispatch(sagaActions.auth.getToken({ password }));
  };

  return (
    <>
      <Form className={styles.form} submit={submit} {...form}>
        <Input.Password
          placeholder={"Пароль"}
          error={form.formState?.errors[fieldsNames.password]?.message}
          control={form.control}
          name={fieldsNames.password}
        />
        <Button>Продолжить</Button>
      </Form>
    </>
  );
}
