import React from 'react';
import { HeadingLabel } from '../../styled';
import { IntroWrapper, IntroPresentation, BookImg, IntroLabel, InputWrapper } from './styled';
import RecentItem from '../../components/recent-item';
import { SearchIcon } from '../../components/icons';
import SearchResultsDescription from '../../components/search-results-description';
import SearchResultItem from '../../components/search-result-item';

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
                <SearchResultsDescription />
            </div>
            <SearchResultItem
                cover="https://images.gr-assets.com/books/1344117043m/15786792.jpg"
                language="English"
                ratingCount="34"
                categories="JS"
                averageRating="4"
            />
        </IntroWrapper>
    );
};

export default Home;
