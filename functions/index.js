const functions = require('firebase-functions');
const admin = require('firebase-admin');
const algoliasearch = require('algoliasearch');

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_INDEX_NAME = 'rainbow-books';

const algoliaClient = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

admin.initializeApp();
const db = admin.firestore();

const collectionIndex = algoliaClient.initIndex(ALGOLIA_INDEX_NAME);

function addOrUpdateDocumentFromAlgolia(snapshot) {
    const newValue = snapshot.data();
    newValue.objectID = snapshot.id;
    return collectionIndex.saveObject(newValue);
}

function deleteDocumentFromAlgolia(snapshot) {
    const objectID = snapshot.id;
    return collectionIndex.deleteObject(objectID);
}

exports.sendBooksToAlgolia = functions.https.onRequest(async (req, res) => {
    const algoliaRecords = [];

    const querySnapshot = await db.collection('books').get();

    querySnapshot.docs.forEach(doc => {
        const document = doc.data();

        const record = {
            objectID: doc.id,
            title: document.title,
            authors: document.authors,
            cover: document.cover,
            averageRating: document.averageRating,
            releaseDate: document.releaseDate,
            isbn: document.isbn,
        };

        algoliaRecords.push(record);
    });

    await collectionIndex.saveObjects(algoliaRecords, (_error, content) => {
        res.status(200).send('Books was indexed to Algolia successfully.');
    });
});

exports.collectionOnCreate = functions.firestore
    .document('books/{uid}')
    .onCreate((snapshot, context) => {
        return addOrUpdateDocumentFromAlgolia(snapshot);
    });

exports.collectionOnUpdate = functions.firestore
    .document('books/{uid}')
    .onUpdate((change, context) => {
        return addOrUpdateDocumentFromAlgolia(change.after);
    });

exports.collectionOnDelete = functions.firestore
    .document('books/{uid}')
    .onDelete((snapshot, context) => {
        return deleteDocumentFromAlgolia(snapshot);
    });
