import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import NewsSite from './components/NewsSite/NewsSite';
import SignUp from './components/SignUp/SignUp';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <NewsSite />
          </Route>
          <Route path="/home">
            <NewsSite />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
