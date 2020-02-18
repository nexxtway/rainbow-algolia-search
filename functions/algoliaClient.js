const functions = require('firebase-functions');
const algoliasearch = require('algoliasearch');

const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;

module.exports = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
