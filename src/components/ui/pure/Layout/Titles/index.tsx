import { createComponent } from "react-dev-starter-pack/dist/Builders/component";
import styles from "./index.module.css";
import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

type propsType = {} & HTMLAttributes<HTMLDivElement>;
const Title: FC<propsType> = ({ children, ...jsxAttr }) => {
  return (
    <h2 {...jsxAttr} className={cn(jsxAttr.className, styles.container)}>
      {children}
    </h2>
  );
};

export default {
  C: Title,
};
