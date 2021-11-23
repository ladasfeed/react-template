import React from "react";
import "./assets/styles/index.css";
import { Route } from "react-router-dom";
import { Sandbox } from "sandbox";
import { routes } from "routes";
import { RouterDevTools } from "core/RouterDevTools/component";
import { AuthRouter } from "components/pages/Auth";

function App() {
  return (
    <>
      <Route path={routes.auth.root}>
        <AuthRouter />
      </Route>
      {process.env.NODE_ENV == "development" && (
        <Route path={"/sandbox"}>
          <Sandbox />
        </Route>
      )}
      <RouterDevTools router={routes} />
    </>
  );
}

export default App;
