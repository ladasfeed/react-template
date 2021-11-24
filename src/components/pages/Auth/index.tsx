import React from "react";
import { Route } from "react-router-dom";
import { routes } from "routes";
import styles from "./index.module.css";
import { Layout } from "components/ui/pure/Layout";
import Login from "./stages/login";
import Password from "./stages/password";

export const AuthRouter = () => {
  return (
    <div className={styles.container}>
      <Layout.Container className={styles.fieldset} column>
        <Layout.Title>Регистрация</Layout.Title>
        <Route path={routes.auth.login}>
          <Login />
        </Route>
        <Route path={routes.auth.password}>
          <Password />
        </Route>
      </Layout.Container>
    </div>
  );
};
