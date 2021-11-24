import React from "react";
import styles from "./index.module.css";
import { UIBuilders } from "react-dev-starter-pack/dist";

type payloadType = {
  text: string;
};
export const PillSwitch = UIBuilders.CheckInputBuilder<"custom", payloadType>({
  classNames: {
    input: styles.input,
  },
  customElement: {
    component: ({ text }) => {
      return <div className={styles.pill}>{text}</div>;
    },
  },
}).group;
