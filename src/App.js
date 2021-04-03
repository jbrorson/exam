import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Projects} path='/projects' />
      </Switch>
    </Router>
  )
}

export default App;
