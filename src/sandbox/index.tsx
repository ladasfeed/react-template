import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.css";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "components/ui/pure/Input";
import { DatePicker } from "components/ui/pure/DatePicker";

type propsType = {};
export const Sandbox: FC<propsType> = (props) => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <div className={styles.container}>
        <Input.Default
          className={styles.input}
          placeholder={"Bksd"}
          control={form.control}
          name={"blob"}
          error={"NewError"}
        />
        <DatePicker control={form.control} name={"fuck"} />
      </div>
    </FormProvider>
  );
};
