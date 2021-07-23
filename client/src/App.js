import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio'
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter> 
    <Header/>
      <Switch>
          <Route component = {Home} exact path = '/' />
          <Route component = {About}  path = '/about' />
          <Route component = {Portfolio} path = '/portfolio'/>
          <Route component = {Contact} path = '/contact'/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
