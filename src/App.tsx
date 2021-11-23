import React, { useEffect } from "react";
import "./assets/styles/index.css";
import { Route } from "react-router-dom";
import { Sandbox } from "sandbox";
import { useDispatch } from "react-redux";
import { sagaActions } from "store/sagas/actions";
import { routes } from "routes";
import { RouterDevTools } from "core/RouterDevTools/component";
import { AuthRouter } from "components/pages/Auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      sagaActions.auth.getUser({
        phone: "12321",
      })
    );
  }, []);

  console.log(routes);

  return (
    <>
      {process.env.NODE_ENV == "development" && (
        <Route path={"/sandbox"}>
          <Sandbox />
        </Route>
      )}
      <Route path={routes.auth.root}>
        <AuthRouter />
      </Route>
      <RouterDevTools router={routes} />
    </>
  );
}

export default App;
