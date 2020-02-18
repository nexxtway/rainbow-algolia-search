import React from 'react';
import { Input } from 'react-rainbow-components';
import {
    IntroWrapper,
    IntroPresentation,
    BookImg,
    IntroLabel,
    InputCallToAction,
    RecentItem,
    InputWrapper,
} from './styled';

const recentBook = 'You Don’t Know JS';

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

                {recentBook ? (
                    <InputCallToAction>
                        Recent Book:
                        <RecentItem href="#">{recentBook}</RecentItem>
                    </InputCallToAction>
                ) : null}
            </div>
        </IntroWrapper>
    );
};

export default Home;
