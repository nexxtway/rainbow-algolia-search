const functions = require('firebase-functions');
const { writeDocumentToAlgolia } = require('../../../libs/algolia');

module.exports = functions.firestore.document('books/{uid}').onCreate((snapshot, context) => {
    return writeDocumentToAlgolia(snapshot.id, snapshot.data());
});
