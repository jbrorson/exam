import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Projects} path='/projects' />
        <Route component={Contact} path='/contact' />
      </Switch>
    </Router>
  )
}

export default App;
