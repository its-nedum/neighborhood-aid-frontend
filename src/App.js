import React from 'react';
import './App.css';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './components/pages/home';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
