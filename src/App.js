import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path='/'  component={Home}/>
      <Route exact path='/contact'  component={Contact}/>
      <Route exact path='/about'  component={About}/>
      <Route exact path='/:post_id' component={Post}/>
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
