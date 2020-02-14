import React from 'react';
import { useCollectionOnce } from 'rainbow-firebase-hooks';
import BooksTable from '../books-table';

export default function Books() {
    const [data, isLoading] = useCollectionOnce({
        path: 'books',
    });
    return <BooksTable data={data} isLoading={isLoading} />;
}
