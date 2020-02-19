const functions = require('firebase-functions');
const { writeDocumentToAlgolia } = require('../../../libs/algolia');
const { getRatingCount } = require('../../helpers/getRatingCount');

module.exports = functions.firestore.document('books/{uid}').onCreate((snapshot, context) => {
    const {
        title,
        authors,
        cover,
        averageRating,
        releaseDate,
        isbn,
        language,
        stars,
    } = snapshot.data();

    const ratingCount = getRatingCount(stars);

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

    return writeDocumentToAlgolia(snapshot.id, recordData);
});
