import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./routes/Home";
import Tv from "./routes/Tv";
import Search from "./routes/Search";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="">
          <Home/>
        </Route>
        <Route path="/tv">
          <Tv/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
