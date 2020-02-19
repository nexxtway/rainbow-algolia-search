const functions = require('firebase-functions');
const { writeDocumentToAlgolia } = require('../../../libs/algolia');
const { getRatingCount } = require('../../helpers/getRatingCount');

module.exports = functions.firestore.document('books/{uid}').onUpdate((change, context) => {
    const {
        title,
        authors,
        cover,
        averageRating,
        releaseDate,
        isbn,
        language,
        stars,
    } = change.after.data();

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

    return writeDocumentToAlgolia(change.after.id, recordData);
});
