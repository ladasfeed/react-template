import ReactSelect, { GroupBase } from "react-select";
import React, { FC, RefAttributes } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import SelectBase from "react-select/base";
import { Control, Controller } from "react-hook-form";
import "./style.css";

type propsType<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> = StateManagerProps<Option, IsMulti, Group> &
  RefAttributes<SelectBase<Option, IsMulti, Group>> & {
    control: Control;
    name: string;
  };
export function Select<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(props: propsType<Option, IsMulti, Group>) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <ReactSelect<Option, IsMulti, Group>
          options={props.options}
          components={{
            Option: props.components?.Option
              ? props.components.Option
              : ({ innerProps, innerRef, children }) => (
                  <div className={styles.option} ref={innerRef} {...innerProps}>
                    {children}
                  </div>
                ),
          }}
          {...field}
          className={classNames("ReactSelect", props.className)}
          classNamePrefix={"ReactSelect"}
          {...props}
        />
      )}
    />
  );
}
