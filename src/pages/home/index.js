import React from 'react';
import { Input } from 'react-rainbow-components';
import { InputCallToAction } from '../../styled';
import { IntroWrapper, IntroPresentation, BookImg, IntroLabel, InputWrapper } from './styled';

const Home = () => {
    return (
        <IntroWrapper>
            <IntroPresentation>
                <BookImg />
                <IntroLabel>Find Books</IntroLabel>
            </IntroPresentation>
            <div>
                <InputCallToAction>Access 250,100 books</InputCallToAction>
                <InputWrapper>
                    <Input placeholder="Find a Book" />
                </InputWrapper>
            </div>
        </IntroWrapper>
    );
};

export default Home;
