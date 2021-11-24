import React, { ReactNode } from "react";
import { Layout } from "components/ui/pure/Layout";
import { Form } from "core/Form";
import { useForm } from "react-hook-form";
import { Input } from "components/ui/pure/Input";
import styles from "./index.module.css";
import { DatePicker } from "components/ui/pure/DatePicker";
import { Select } from "components/ui/pure/Select";
import { YUP } from "validation";
import { Button } from "components/ui/pure/Button";
import { CheckInput } from "components/ui/pure/CheckInput";
import { PillSwitch } from "components/ui/pure/PillSwitch";
import { Switch } from "components/ui/pure/Switch";
const fieldsNames = {
  name: "name",
  last_name: "last_name",
  phone: "phone",
  birth_date: "birth_date",
  amount: "amount",
  job: "job",
  colors: "colors",
  sex: "sex",
  taxation: "taxation",
  final: "final",
};

const scheme = YUP.create({
  [fieldsNames.job]: YUP.instance.object().required(),
  [fieldsNames.name]: YUP.schemas.required(),
  [fieldsNames.last_name]: YUP.schemas.required(),
  [fieldsNames.phone]: YUP.schemas.min(18),
  [fieldsNames.birth_date]: YUP.instance
    .date()
    .required()
    .min(new Date("1900-12-12")),
  [fieldsNames.amount]: YUP.instance
    .number()
    .required()
    .when(fieldsNames.birth_date, {
      is: (values: Date) => {
        try {
          return values.getFullYear() < 2000;
        } catch {
          return false;
        }
      },
      then: YUP.instance.number().min(5000),
    }),
});

export default function () {
  const form = useForm({
    reValidateMode: "onSubmit",
    resolver: YUP.resolver(scheme),
  });
  const errors = form.formState.errors;
  const formw = form.watch();

  console.log(formw);
  const submit = () => {};

  const displayErrors = () => {
    let nodes: Array<ReactNode> = [];
    let key: keyof typeof errors;
    for (key in errors) {
      nodes.push(
        <div style={{ marginBottom: 20 }}>
          <h2>
            {key}: {errors[key]?.message}
          </h2>
        </div>
      );
    }
    return nodes;
  };

  console.log(errors);
  return (
    <div className={styles.container}>
      <Layout.Title>Анкета</Layout.Title>
      <Form submit={submit} {...form} className={styles.form}>
        <div>{displayErrors()}</div>
        <Layout.Container title={"Общие данные"} className={styles.form_block}>
          <Input.Default
            control={form.control}
            name={fieldsNames.name}
            placeholder={"Имя"}
          />
          <Input.Lock
            control={form.control}
            name={fieldsNames.phone}
            placeholder={"Телефон"}
          />
          <Input.Editable
            control={form.control}
            name={fieldsNames.last_name}
            placeholder={"Фамилия"}
          />
          <Input.Numeric
            format={"####"}
            control={form.control}
            name={fieldsNames.amount}
            placeholder={"Деньги"}
          />
        </Layout.Container>

        <Layout.Container title={"Мета данные"} className={styles.form_block}>
          <DatePicker
            control={form.control}
            name={fieldsNames.birth_date}
            placeholder="Дата рождения"
          />
          <Select
            name={fieldsNames.job}
            control={form.control}
            options={[
              {
                label: "Fuck",
              },
            ]}
          />
          <Button>А давай</Button>
        </Layout.Container>

        <Layout.Container
          title={"Чекаем чекбоксы"}
          className={styles.form_block}
        >
          <div>
            <CheckInput.default
              control={form.control}
              inputType={"checkbox"}
              className={styles.checkbox}
              label={"green"}
              name={fieldsNames.colors}
            />
            <CheckInput.default
              control={form.control}
              className={styles.checkbox}
              inputType={"checkbox"}
              label={"white"}
              name={fieldsNames.colors}
            />
            <CheckInput.default
              control={form.control}
              className={styles.checkbox}
              inputType={"checkbox"}
              label={"black"}
              name={fieldsNames.colors}
            />
          </div>
          <div>
            <CheckInput.default
              control={form.control}
              className={styles.checkbox}
              inputType={"radio"}
              value={"Male"}
              label={"Male"}
              name={fieldsNames.sex}
            />
            <CheckInput.default
              control={form.control}
              className={styles.checkbox}
              inputType={"radio"}
              value={"Female"}
              label={"Female"}
              name={fieldsNames.sex}
            />
          </div>
        </Layout.Container>

        <Layout.Container
          title={"Чекаем группы чекбоксов"}
          className={styles.form_block}
        >
          <CheckInput.group
            control={form.control}
            inputType={"checkbox"}
            className={styles.checkbox_group}
            options={[
              {
                label: "fuck",
                value: "fuck",
              },
              {
                label: "fuck2",
                value: "fuck2",
              },
            ]}
            name={fieldsNames.colors}
          />
        </Layout.Container>

        <Layout.Container title={"Чекаем пилсвичи"}>
          <PillSwitch
            name={fieldsNames.taxation}
            control={form.control}
            inputType={"checkbox"}
            options={[
              {
                value: "taxpayer",
                customPayload: {
                  text: "Плачу налоге",
                },
              },
              {
                value: "gangster",
                customPayload: {
                  text: "Не плачу налоге",
                },
              },
            ]}
          />
        </Layout.Container>
        <Layout.Container title={"Чекаем мать"}>
          <Switch.default
            name={fieldsNames.final}
            control={form.control}
            placeholder={"sd"}
          />
        </Layout.Container>
      </Form>
    </div>
  );
}
