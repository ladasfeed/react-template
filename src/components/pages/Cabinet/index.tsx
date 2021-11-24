import React from "react";
import { Route } from "react-router-dom";
import { routes } from "routes";
import styles from "./index.module.css";
import Worksheet from "./pages/Worksheet";

export const Cabinet = () => {
  return (
    <div className={styles.container}>
      <Route path={routes.cabinet.root}>
        <Worksheet />
      </Route>
    </div>
  );
};
