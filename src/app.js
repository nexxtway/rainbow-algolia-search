import React, { useState } from 'react';
import { FirebaseProvider } from 'rainbow-firebase-hooks';
import { Application } from 'react-rainbow-components';
import { BrowserRouter as Router } from 'react-router-dom';
import firebaseApp from './firebase';
import AppRoutes from './routes';
import Layout from './components/layout';

const firebaseProviderSettings = { app: firebaseApp };

const themes = {
    light: {
        rainbow: {
            palette: {
                brand: '#44D7B6',
            },
        },
    },
    dark: {
        rainbow: {
            palette: {
                brand: '#44D7B6',
                mainBackground: '#212121',
            },
        },
    },
};

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <FirebaseProvider value={firebaseProviderSettings}>
            <Application theme={themes[theme]}>
                <Router>
                    <Layout onSwitchTheme={toggleTheme} theme={theme}>
                        <AppRoutes />
                    </Layout>
                </Router>
            </Application>
        </FirebaseProvider>
    );
}

export default App;
