const algoliaClient = require('../../algoliaClient');

const ALGOLIA_INDEX_NAME = 'rainbow-books';
const collectionIndex = algoliaClient.initIndex(ALGOLIA_INDEX_NAME);

module.exports.writeDocumentToAlgolia = function(id, data) {
    const record = data;
    record.objectID = id;
    return collectionIndex.saveObject(record);
};

module.exports.deleteDocumentInAlgolia = function(id) {
    return collectionIndex.deleteObject(id);
};

module.exports.sendDocumentsToAlgolia = function(documents) {
    return collectionIndex.saveObjects(documents);
};
