import React from 'react';
import { FirebaseProvider } from 'rainbow-firebase-hooks';
import { Application } from 'react-rainbow-components';
import firebaseApp from './firebase';
import Books from './components/books';

const value = { app: firebaseApp };

function App() {
    return (
        <FirebaseProvider value={value}>
            <Application>
                {/* Routes */}
                <Books />
            </Application>
        </FirebaseProvider>
    );
}

export default App;
