import React from 'react';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { HeadingLabel } from '../../styled';
import { IntroWrapper, IntroPresentation, BookImg, IntroLabel, InputWrapper } from './styled';
import RecentItem from '../../components/recent-item';
import { SearchIcon } from '../../components/icons';
import SearchResultItem from '../../components/search-result-item';
import SearchResultsDescription from '../../components/search-results-description';
import searchClient from '../../algoliaClient';

const Home = () => {
    return (
        <InstantSearch indexName="rainbow-books" searchClient={searchClient}>
            <IntroWrapper>
                <IntroPresentation>
                    <BookImg />
                    <IntroLabel>Find Books</IntroLabel>
                </IntroPresentation>
                <div>
                    <Configure hitsPerPage={8} />
                    <HeadingLabel>Access 250,100 books</HeadingLabel>
                    <InputWrapper iconPosition="right" icon={<SearchIcon />} />
                    <RecentItem />
                    <SearchResultsDescription />
                </div>
                <SearchResultItem />
            </IntroWrapper>
        </InstantSearch>
    );
};

export default Home;
