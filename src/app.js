import React, { useState } from 'react';
import { FirebaseProvider } from 'rainbow-firebase-hooks';
import { Application } from 'react-rainbow-components';
import { BrowserRouter as Router } from 'react-router-dom';
import firebaseApp from './firebase';
import AppRoutes from './routes';
import Layout from './components/layout';

const firebaseProviderSettings = { app: firebaseApp };

function App() {
    const [theme, setTheme] = useState();

    return (
        <FirebaseProvider value={firebaseProviderSettings}>
            <Application theme={theme}>
                <Router>
                    <Layout onSwitchTheme={newTheme => setTheme(newTheme)}>
                        <AppRoutes />
                    </Layout>
                </Router>
            </Application>
        </FirebaseProvider>
    );
}

export default App;
