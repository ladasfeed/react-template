import React, { FC } from "react";
import styles from "./index.module.css";

export const Button: FC = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};
