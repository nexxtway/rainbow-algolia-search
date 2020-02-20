import React from 'react';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { HeadingLabel } from '../../styled';
import { Wrapper, PresentationWrapper, BookImg, IntroLabel, InputWrapper } from './styled';
import { SearchIcon } from '../../components/icons';
import SearchResultItem from '../../components/search-result-item';
import ResultsAlgolia from '../../algolia-components/results';
import RecentItem from '../../components/recent-item';
import SearchResultsDescription from '../../components/search-results-description';
import searchClient from '../../algoliaClient';
import ResultCount from '../../algolia-components/result-count';

import {
    DisplayIfQueryInput,
    DisplayIfNotQueryInput,
    DisplayIfResults,
} from '../../algolia-components/conditional-display';

const Home = () => {
    return (
        <InstantSearch indexName="rainbow-books" searchClient={searchClient}>
            <Wrapper>
                <PresentationWrapper>
                    <BookImg />
                    <IntroLabel>Find Books</IntroLabel>

                    <Configure hitsPerPage={3} />
                    <DisplayIfNotQueryInput>
                        <HeadingLabel>
                            Access <ResultCount /> books
                        </HeadingLabel>
                    </DisplayIfNotQueryInput>
                    <InputWrapper iconPosition="right" icon={<SearchIcon />} />
                    {/* <InputWrapper
                        label={<HeadingLabel>Access 250,100 books</HeadingLabel>}
                        iconPosition="right"
                        icon={<SearchIcon />}
                    /> */}
                    <RecentItem />
                    <DisplayIfQueryInput>
                        <SearchResultsDescription />
                    </DisplayIfQueryInput>

                    <DisplayIfQueryInput>
                        <DisplayIfResults>
                            <ResultsAlgolia component={SearchResultItem} />
                        </DisplayIfResults>
                    </DisplayIfQueryInput>
                </PresentationWrapper>
            </Wrapper>
        </InstantSearch>
    );
};

export default Home;
