const functions = require('firebase-functions');
const { writeDocumentToAlgolia } = require('../../../libs/algolia');

module.exports = functions.firestore.document('books/{uid}').onUpdate((change, context) => {
    const {
        title,
        authors,
        cover,
        averageRating,
        releaseDate,
        isbn,
        language,
    } = change.after.data();

    const recordData = {
        title,
        authors,
        cover,
        averageRating,
        releaseDate,
        isbn,
        language,
    };

    return writeDocumentToAlgolia(change.after.id, recordData);
});
