import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <>
      <header>
        <h1>WiT HR</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <p>main</p>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users">
          <p>users</p>
        </Route>
        <Route path="/user/:id">
          <p>user detail</p>
        </Route>
      </Switch>
      <div className="remote-control">
        <Link to="/">Main Page</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">Users</Link>
        <Link to="/user/1">id:1</Link>
      </div>
    </>
  );
}

export default App;
