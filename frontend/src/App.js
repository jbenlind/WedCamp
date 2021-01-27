import { Switch, Route } from "react-router-dom";
import SplashPage from './components/SplashPage';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Explorer from './components/Explore';
// import upComingBookings from './components/Bookings';


function App() {
  return (
    <>
    <Navigation />
    {/* <upComingBookings /> */}
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

        <Route path='/explore'>
          <Explorer />
        </Route>
        
      </Switch>
    </>

  );
}

export default App;
