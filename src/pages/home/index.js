import React from 'react';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { HeadingLabel } from '../../styled';
import { IntroWrapper, IntroPresentation, BookImg, IntroLabel, InputWrapper } from './styled';
import { SearchIcon } from '../../components/icons';
import RecentItem from '../../components/recent-item';
import SearchResultItems from '../../components/search-result-items';
import SearchResultsDescription from '../../components/search-results-description';
import searchClient from '../../algoliaClient';

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
                    <Configure hitsPerPage={8} />
                    <HeadingLabel>Access 250,100 books</HeadingLabel>
                    <InputWrapper iconPosition="right" icon={<SearchIcon />} />
                    <RecentItem />
                    <SearchResultsDescription />
                </div>

                <SearchResultItems items={items} />
            </IntroWrapper>
        </InstantSearch>
    );
};

export default Home;
