import { Route, Switch ,Link , BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/PaginaPrincipal/PaginaPrincipal";
import SignUp from "../pages/SignUp/SignUp";

const routing = (
  <Router>
    <div>
      <Link to="/login">Login</Link>
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signUp" component={SignUp} />
      
    </Switch>
  </Router>
);
export default routing;
