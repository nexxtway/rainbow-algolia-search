import React from 'react';
import { FirebaseProvider } from 'rainbow-firebase-hooks';
import { Application } from 'react-rainbow-components';
import { BrowserRouter as Router } from 'react-router-dom';
import firebaseApp from './firebase';
import AppRoutes from './hoc/routes';
import Layout from './hoc/layout';

const firebaseProviderSettings = { app: firebaseApp };

function App() {
    return (
        <FirebaseProvider value={firebaseProviderSettings}>
            <Router>
                <Application>
                    <Layout>
                        <AppRoutes />
                    </Layout>
                </Application>
            </Router>
        </FirebaseProvider>
    );
}

export default App;
