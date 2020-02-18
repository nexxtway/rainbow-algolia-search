import React from 'react';
import { InputCallToAction } from '../../styled';
import { IntroWrapper, IntroPresentation, BookImg, IntroLabel } from './styled';
import SearchInput from '../../components/search-input';
import RecentItem from '../../components/recent-item';

const Home = () => {
    return (
        <IntroWrapper>
            <IntroPresentation>
                <BookImg />
                <IntroLabel>Find Books</IntroLabel>
            </IntroPresentation>
            <div>
                <InputCallToAction>Access 250,100 books</InputCallToAction>
                <SearchInput />
                <RecentItem />
            </div>
        </IntroWrapper>
    );
};

export default Home;
