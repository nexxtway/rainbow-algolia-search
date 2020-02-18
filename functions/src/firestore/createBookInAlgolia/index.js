const functions = require('firebase-functions');
const { writeDocumentToAlgolia } = require('../../../libs/algolia');

module.exports = functions.firestore.document('books/{uid}').onCreate((snapshot, context) => {
    const { title, authors, cover, averageRating, releaseDate, isbn, language } = snapshot.data();

    const recordData = {
        title,
        authors,
        cover,
        averageRating,
        releaseDate,
        isbn,
        language,
    };

    return writeDocumentToAlgolia(snapshot.id, recordData);
});
