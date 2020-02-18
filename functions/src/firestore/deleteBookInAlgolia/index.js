const functions = require('firebase-functions');
const { deleteDocumentInAlgolia } = require('../../../libs/algolia');

module.exports = functions.firestore.document('books/{uid}').onDelete((snapshot, context) => {
    return deleteDocumentInAlgolia(snapshot.id);
});
