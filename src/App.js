import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from './Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route
            exact
            path="/"
            render={() => <Main />}
          />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
