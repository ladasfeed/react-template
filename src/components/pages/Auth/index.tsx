import React from "react";
import { Route } from "react-router-dom";
import { routes } from "routes";
import Login from "./stages/login";
import Password from "./stages/password";
import styles from "./index.module.css";
import { Layout } from "components/ui/pure/Layout";

export const AuthRouter = () => {
  return (
    <div className={styles.container}>
      <Layout.Container className={styles.fieldset} column>
        <Layout.Title>Регистрация</Layout.Title>
        <Route path={routes.auth.login}>
          <Login.C />
        </Route>
        <Route path={routes.auth.password}>
          <Password.C />
        </Route>
      </Layout.Container>
    </div>
  );
};
