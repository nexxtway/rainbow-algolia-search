import React from 'react';
import { HeadingLabel } from '../../styled';
import { IntroWrapper, IntroPresentation, BookImg, IntroLabel, InputWrapper } from './styled';
import RecentItem from '../../components/recent-item';
import { SearchIcon } from '../../components/icons';

const Home = () => {
    return (
        <IntroWrapper>
            <IntroPresentation>
                <BookImg />
                <IntroLabel>Find Books</IntroLabel>
            </IntroPresentation>
            <div>
                <HeadingLabel>Access 250,100 books</HeadingLabel>
                <InputWrapper iconPosition="right" icon={<SearchIcon />} />
                <RecentItem />
            </div>
        </IntroWrapper>
    );
};

export default Home;
