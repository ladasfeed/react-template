import { createComponent } from "react-dev-starter-pack/dist/Builders/component";
import styles from "./index.module.css";
import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

type propsType = {
  column?: boolean;
} & HTMLAttributes<HTMLDivElement>;
const Container: FC<propsType> = ({ children, column, ...jsxAttr }) => {
  return (
    <div
      {...jsxAttr}
      className={cn(jsxAttr.className, styles.container, {
        [styles["container--column"]]: column,
      })}
    >
      {children}
    </div>
  );
};

export default {
  C: Container,
};
