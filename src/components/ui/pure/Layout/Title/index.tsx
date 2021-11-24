import styles from "./index.module.css";
import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

type propsType = {} & HTMLAttributes<HTMLDivElement>;
export default function ({ children, ...jsxAttr }: propsType) {
  return (
    <h2 {...jsxAttr} className={cn(jsxAttr.className, styles.container)}>
      {children}
    </h2>
  );
}
