import React from 'react';
import {} from './styled';
import Back from '../../components/back';

const backUrlDemo = '/';

const Book = () => {
    return (
        <div>
            <Back url={backUrlDemo} />

            <div>detail page</div>
        </div>
    );
};

export default Book;
