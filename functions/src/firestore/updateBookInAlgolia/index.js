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
        starts,
    } = change.after.data();

    const ratingCount = Object.values(starts).reduce((pv, cv) => Number(pv) + Number(cv), 0);

    const recordData = {
        title,
        authors,
        cover,
        averageRating,
        releaseDate,
        isbn,
        language,
        ratingCount,
    };

    return writeDocumentToAlgolia(change.after.id, recordData);
});
