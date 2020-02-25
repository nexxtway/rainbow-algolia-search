import { booksIndex } from '../../algoliaClient';

export const fetchBooks = query => {
    return booksIndex
        .search(query, {
            hitsPerPage: 6,
        })
        .then(({ hits }) => {
            return hits;
        });
};
