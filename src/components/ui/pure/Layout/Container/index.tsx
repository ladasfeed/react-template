import styles from "./index.module.css";
import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";
import { Layout } from "components/ui/pure/Layout/index";

type propsType = {
  column?: boolean;
  title?: string;
} & HTMLAttributes<HTMLDivElement>;
export default function ({ children, column, title, ...jsxAttr }: propsType) {
  return (
    <div
      {...jsxAttr}
      className={cn(jsxAttr.className, styles.container, {
        [styles["container--column"]]: column,
      })}
    >
      {title && <Layout.Title className={styles.title}>{title}</Layout.Title>}
      {children}
    </div>
  );
}
