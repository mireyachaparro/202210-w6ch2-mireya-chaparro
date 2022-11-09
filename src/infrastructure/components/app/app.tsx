import { Auth0Provider } from '@auth0/auth0-react';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

export function App() {
    return (
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
            redirectUri={window.location.origin}
        >
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
            <div>App inicial de React</div>
        </Auth0Provider>
    );
}
