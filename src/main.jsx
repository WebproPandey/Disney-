import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/store.js';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH0_DOMAIN} // Use Vite's environment variable
    clientId={import.meta.env.VITE_AUTH0_CLIENT_ID} // Use Vite's environment variable
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Auth0Provider>
);
