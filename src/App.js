import React from 'react';
import './App.css';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './components/pages/home';
import Footer from './components/layouts/footer';
import About from './components/pages/users/about'
import Signin from './components/pages/users/signin'
import Signup from './components/pages/users/signup'
import Dashboard from './components/pages/requests/dashboard';
import Request from './components/pages/requests/request'
import MyVolunteering from './components/pages/requests/myVolunteering';
import MyRequests from './components/pages/requests/myRequests'
import SingleRequest from './components/pages/requests/singleRequest';
import Message from './components/pages/requests/message';
import RequestVolunteers from './components/pages/requests/requestVolunteers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/sign-in" component={Signin} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/me/dashboard" component={Dashboard} />
          <Route path="/request/new" component={Request} />
          <Route path="/users/requests" component={MyRequests} />
          <Route path="/users/volunteering" component={MyVolunteering} />
          <Route exact path="/request/:reqId/:title" component={SingleRequest} />
          <Route path="/request/my-volunteers" component={RequestVolunteers} />
          <Route path="/request/message" component={Message} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
