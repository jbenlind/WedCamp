import { Switch, Route } from "react-router-dom";
import SignupFormPage from './components/SignupFormPage';
import LoginFormPage from './components/LoginFormPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Navigation />
      <Switch>

        <Route path='/login'>
          <LoginFormPage />
        </Route>

        <Route path='/signup'>
          <SignupFormPage />
        </Route>

      </Switch>
    </>

  );
}

export default App;
