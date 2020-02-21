import React, { useState } from 'react';
import { FirebaseProvider } from 'rainbow-firebase-hooks';
import { Application } from 'react-rainbow-components';
import { BrowserRouter as Router } from 'react-router-dom';
import firebaseApp from './firebase';
import AppRoutes from './routes';
import Layout from './components/layout';

const firebaseProviderSettings = { app: firebaseApp };

const cyanDarkTheme = {
    rainbow: {
        palette: {
            brand: '#44D7B6',
            mainBackground: '#212121',
        },
    },
};

const lightTheme = {
    rainbow: {
        palette: {
            brand: '#44D7B6',
            mainBackground: '#f4f6f9',
        },
    },
};

function App() {
    const [theme, setTheme] = useState('light');
    const [themeData, setThemeData] = useState(lightTheme);

    const toggleTheme = () => {
        if (theme === 'light') {
            setThemeData(cyanDarkTheme);
            setTheme('dark');
        } else {
            setThemeData(lightTheme);
            setTheme('light');
        }
    };

    return (
        <FirebaseProvider value={firebaseProviderSettings}>
            <Application theme={themeData}>
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
