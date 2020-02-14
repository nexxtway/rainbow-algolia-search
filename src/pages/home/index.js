import React from 'react';
import styled from 'styled-components';

const Styled = styled.div`
    a {
        color: orange;
    }
`;

const Home = () => {
    return (
        <Styled>
            Home page info
            <br />
            <br />
            <a href="/book-detail">Book detail page</a>
        </Styled>
    );
};

export default Home;
