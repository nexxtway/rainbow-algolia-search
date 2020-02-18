const functions = require('firebase-functions');
const { writeDocumentToAlgolia } = require('../../../libs/algolia');

module.exports = functions.firestore.document('books/{uid}').onUpdate((change, context) => {
    return writeDocumentToAlgolia(change.after.id, change.after.data());
});
