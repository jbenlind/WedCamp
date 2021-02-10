import React, {useState, useEffect} from "react";
import { useDispatch } from 'react-redux'
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
import * as sessionActions from './store/session';


function App() {
  const dispatch = useDispatch();
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setUserLoaded(true));
  }, [dispatch]);
  return (
    <>
        {userLoaded &&
        (<div>
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
        </div>
        )}
    </>

  );
}

export default App;
