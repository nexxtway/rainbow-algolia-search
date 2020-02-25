import { booksIndex } from '../../algoliaClient';
import { getNRandomFromArray } from '../../helpers/getNRandomFromArray';

export const fetchBooks = (query, except) => {
    return booksIndex
        .search(query, {
            hitsPerPage: 20,
        })
        .then(({ hits }) => {
            const filterBooks = hits.filter(book => book.objectID !== except);
            return getNRandomFromArray(filterBooks, 6);
        });
};
