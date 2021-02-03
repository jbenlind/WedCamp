import React from "react";
import { Switch, Route } from "react-router-dom";
import SplashPage from './components/SplashPage';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Explorer from './components/Explore';
import DemoUser from './components/DemoUser';
import VenueInfo from './components/VenueInfo';
import Footer from './components/footer';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <>
      <Navigation />

        <Switch>

          <Route path='/' exact>
            <SplashPage />
          </Route>

          <Route path='/login'>
            <LoginFormPage />
          </Route>

          <Route path='/signup'>
            <SignupFormPage />
          </Route>

          <Route path='/explore' exact>
            <Explorer />
          </Route>

          <Route path='/demo'>
            <DemoUser />
          </Route>

          <Route path='/explore/:venueId'>
            <VenueInfo />
          </Route>

          <Route path="/searchResults">
            <SearchResults />
          </Route>

        </Switch>
      <Footer />
    </>

  );
}

export default App;
