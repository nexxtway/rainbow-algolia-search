import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
    a {
        color: orange;
    }
`;

const BookDetail = () => {
    return (
        <Styled>
            Book detail page info
            <br />
            <br />
            <a href="/">Home page</a>
        </Styled>
    );
};

export default BookDetail;
