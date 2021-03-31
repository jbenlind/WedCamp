import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider} from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreCSRF } from './store/csrf';
import { ModalProvider } from './context/modal';
import { LoadScript } from '@react-google-maps/api';


const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();
  window.store = store;
}

function Root() {
  return (
    <ReduxProvider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
            <App />
          </LoadScript>
        </BrowserRouter>
      </ModalProvider>
    </ReduxProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
