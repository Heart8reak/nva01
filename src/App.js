import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About'
import Staff from './components/pages/Staff'
import Social from './components/pages/Social'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/staff' exact component={Staff} />
        <Route path='/social' exact component={Social} />
      </Switch>
    </Router>   
    </>
  );
}

export default App;
