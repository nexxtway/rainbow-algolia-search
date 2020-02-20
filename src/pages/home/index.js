import React from 'react';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { HeadingLabel } from '../../styled';
import { IntroWrapper, IntroPresentation, BookImg, IntroLabel, InputWrapper } from './styled';
import { SearchIcon } from '../../components/icons';
import SearchResultItem from '../../components/search-result-item';
import ResultsAlgolia from '../../algolia-components/results';
import RecentItem from '../../components/recent-item';
// import SearchResultItems from '../../components/search-result-items';
import SearchResultsDescription from '../../components/search-results-description';
import searchClient from '../../algoliaClient';
import ResultCount from '../../algolia-components/result-count';
import {
    DisplayIfQueryInput,
    DisplayIfNotQueryInput,
    DisplayIfResults,
} from '../../algolia-components/conditional-display';

const items = [
    {
        title: 'Title',
        author: 'Author',
        ratingCount: 42,
        averageRating: '3',
        language: 'Spanish',
        cover:
            'https://uploads-ssl.webflow.com/5e46eb28f540698137a3a5b3/5e47268c6fdb67cb98b7dcb4_tmp-book.png',
        categories: ['Adventures', 'Documental'],
    },
    {
        title: 'Title',
        author: 'Author',
        ratingCount: 42,
        averageRating: '3',
        language: 'Spanish',
        cover:
            'https://uploads-ssl.webflow.com/5e46eb28f540698137a3a5b3/5e47268c6fdb67cb98b7dcb4_tmp-book.png',
        categories: ['Adventures', 'Documental'],
    },
];

const Home = () => {
    return (
        <InstantSearch indexName="rainbow-books" searchClient={searchClient}>
            <IntroWrapper>
                <IntroPresentation>
                    <BookImg />
                    <IntroLabel>Find Books</IntroLabel>
                </IntroPresentation>
                <div>
                    <Configure hitsPerPage={3} />
                    <DisplayIfNotQueryInput>
                        <HeadingLabel>
                            Access <ResultCount /> books
                        </HeadingLabel>
                    </DisplayIfNotQueryInput>
                    <InputWrapper
                        label={<HeadingLabel>Access 250,100 books</HeadingLabel>}
                        iconPosition="right"
                        icon={<SearchIcon />}
                    />
                    <RecentItem />
                    <SearchResultsDescription />
                </div>
                <DisplayIfQueryInput>
                    <DisplayIfResults>
                        <ResultsAlgolia component={SearchResultItem} />
                    </DisplayIfResults>
                </DisplayIfQueryInput>

                {/* <SearchResultItems items={items} /> */}
            </IntroWrapper>
        </InstantSearch>
    );
};

export default Home;
