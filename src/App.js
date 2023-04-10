import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import routes from "./routes";
// import { ToastContainer } from "react-toastify";
// import Login from "./app/accounts/Login";
// import Signup from "./app/accounts/Signup";
// import VerifyOtp from "./app/accounts/VerifyOtp";
// import UserDetails from "./app/accounts/UserDetails";

function App() {
  // let history = useHistory();
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((prop, key) => {
          return (
            <prop.type
              exact
              path={prop.path}
              key={key}
              component={prop.component}
            />
          );
        })}
      </Switch>
      {/* <ToastContainer
        toastClassName="custom-toastify"
        position="top-right"
        hideProgressBar
      /> */}
      {/* <Login history={history} />
      <VerifyOtp history={history} />
      <Signup />
      <UserDetails history={history} /> */}
    </BrowserRouter>
  );
}

export default App;
