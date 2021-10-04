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
          <Route  exact path = '/' >
            <Home/>
          </Route>
          <Route  path = '/about'>
            <About />
          </Route>
          <Route path = '/portfolio'>
            <Portfolio />
          </Route>
          <Route path = '/contact'>
            <Contact/>
          </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App;
