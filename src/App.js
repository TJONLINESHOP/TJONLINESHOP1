import logo from './logo.svg';
import Login from './Login';
import Menu from './TJonline';
import { HashRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="Login">
      <Switch>
      <Route exact path="/"  component={Login}/>

     <Route exact path="/Menu" component={Menu}/>
     </Switch>
    </div>
    
    </HashRouter>
  );
}

export default App;
