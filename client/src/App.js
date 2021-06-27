import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import contact from './components/contact';
import portfolio from './components/portfolio'
import NavBar from './components/header';



function App() {
  return (
    <BrowserRouter> 
    <NavBar/>
      <Switch>
          <Route component = {home} path = '/' exact />
          <Route component = {about} path = '/about'/>
          <Route component = {portfolio} path = '/portfolio'/>
          <Route component = {contact} path = '/contact'/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
