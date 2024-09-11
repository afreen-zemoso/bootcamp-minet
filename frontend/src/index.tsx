import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Auth0Provider
                        domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
                        clientId={
                            process.env.REACT_APP_AUTH0_CLIENT_ID as string
                        }
                        authorizationParams={{
                            redirect_uri: process.env.REACT_APP_API_URL
                        }}
                    >
                        <App />
                    </Auth0Provider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </StrictMode>
);
