import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from '../store/store.js';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-tnme50wkbomamrd.us.auth0.com"
  clientId="AgCO5MjvrSL4VZyFTlfPVFr9QlFZJy8l"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
   <BrowserRouter future={{ v7_startTransition: true ,v7_relativeSplatPath: true }}>
    <Provider store={store}>
     <App />
    </Provider>
   </BrowserRouter>
  </Auth0Provider>
)
