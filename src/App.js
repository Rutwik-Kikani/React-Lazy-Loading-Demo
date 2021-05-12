import './App.css';
import React,{ Suspense }from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';


const Home = React.lazy(() =>
new Promise((resolve, reject) =>
  setTimeout(() => resolve(import("./components/Home")), 500)
));
const About = React.lazy(() => import("./components/About"));
const Setting = React.lazy(() => import("./components/Setting"));
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/setting">Setting</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Suspense fallback={<div>Loading....</div>}>
        <Route path="/home"exact><Home/></Route>
        <Route path="/about" exact><About/></Route>
        <Route path="/setting" exact><Setting/></Route>
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
