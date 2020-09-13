import React from 'react';
import './App.css';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './components/pages/home';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import About from './components/pages/about'
import Signin from './components/pages/signin'
import Signup from './components/pages/signup'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sign-in" component={Signin} />
          <Route path="/sign-up" component={Signup} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
