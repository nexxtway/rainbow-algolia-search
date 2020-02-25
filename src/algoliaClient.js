import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP_ID,
    process.env.REACT_APP_ALGOLIA_SEARCH_KEY,
);

export default client;

export const booksIndex = client.initIndex('rainbow-books');
