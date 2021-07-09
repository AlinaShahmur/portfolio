import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import home from './components/Home';
import about from './components/About';
import contact from './components/Contact';
import portfolio from './components/Portfolio'
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter> 
    <Header/>
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
