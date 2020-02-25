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
                success: '#ffb900',
            },
        },
    },
    dark: {
        rainbow: {
            palette: {
                brand: '#44D7B6',
                mainBackground: '#212121',
                success: '#ffb900',
            },
        },
    },
};

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
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
