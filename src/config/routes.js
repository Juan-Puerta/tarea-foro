import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/PaginaPrincipal/PaginaPrincipal";
import SignUp from "../pages/SignUp/SignUp";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
    </Switch>
  </Router>
);
export default routing;
