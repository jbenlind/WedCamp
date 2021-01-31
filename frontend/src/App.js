import { Switch, Route } from "react-router-dom";
import SplashPage from './components/SplashPage';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import Explorer from './components/Explore';
import DemoUser from './components/DemoUser';
import FullDetails from './components/Explore/FullDetails';
import Footer from './components/footer';
import SearchResults from './components/SearchResults';
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

        <Route path='/explore' exact>
          <Explorer />
        </Route>

        <Route path='/demo'>
          <DemoUser />
        </Route>

        <Route path='/explore/:venueId'>
          <FullDetails />
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
