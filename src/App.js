import React  from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Discover from './components/discover';
import Matches from './components/matches';
import Notes from './components/notes';
import Profile from './components/profile';
import AppBar from './components/appBar';
import './App.css';
import OtpScreen from './components/otpScreen';

function App() {
  return (
    <BrowserRouter>
    <AppBar/>
    <div className="pages">
    <Switch>
      <Route exact path="/" component={Discover}/>
      <Route exact path="/matches" component={Matches}/>
      <Route exact path="/notes" component={Notes}/>
      <Route exact path="/profile/phone-number" component={Profile}/>
      <Route exact path="/profile/phone-number/otp/:phId" component={OtpScreen}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
