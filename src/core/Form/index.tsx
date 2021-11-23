import React, { FC, FormEventHandler, HTMLAttributes, useEffect } from "react";
import {
  FormState,
  UseFormClearErrors,
  UseFormHandleSubmit,
  UseFormSetError,
} from "react-hook-form";
import { useSelector } from "react-redux";
import { errorsSelectors } from "store/state/static/errorsReducer";

const getFieldFromObjectByArrayOfKeys = (object: any, keys: Array<string>) => {
  let tempObj = { ...object };
  for (let i = 0; i < keys.length; i++) {
    try {
      tempObj = { ...tempObj[keys[i]] };

      if (tempObj?.message) {
        return tempObj;
      }
    } catch {
      return {};
    }
  }
};

type propsType = {
  submit: any;
  clearErrors: UseFormClearErrors<any>;
  formState: FormState<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  setError: UseFormSetError<any>;
} & HTMLAttributes<HTMLFormElement>;
export const Form: FC<propsType> = ({
  children,
  clearErrors,
  formState,
  handleSubmit,
  submit,
  setError,
  ...props
}) => {
  const { errors } = formState;
  const errorsFromStore = useSelector(errorsSelectors.fieldsErrors);

  /** Setting errors from server to front */
  useEffect(() => {
    clearErrors();
    for (let key in errorsFromStore) {
      setError(
        key,
        {
          message: errorsFromStore[key],
        },
        {
          shouldFocus: true,
        }
      );
    }
  }, [errorsFromStore]);

  /** Clear error from field */
  const onFormChange = (e: any) => {
    props.onChange && props.onChange(e);
    const name = e.target.name;
    if (name.includes(".")) {
      const keys = name.split(".");
      const message = getFieldFromObjectByArrayOfKeys(errors, keys)?.message;

      if (message) {
        clearErrors(name);
      }
    } else if (errors[name]?.message) {
      clearErrors(name);
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} onChange={onFormChange} {...props}>
      {children}
    </form>
  );
};
