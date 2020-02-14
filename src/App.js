import React from 'react';
import { FirebaseProvider } from 'rainbow-firebase-hooks';
import { Application } from 'react-rainbow-components';
import firebaseApp from './firebase';

const value = { app: firebaseApp };

function App() {
    return (
        <FirebaseProvider value={value}>
            <Application>{/* Routes */}</Application>
        </FirebaseProvider>
    );
}

export default App;
