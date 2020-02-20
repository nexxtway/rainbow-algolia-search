import React from 'react';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { HeadingLabel } from '../../styled';
import { Wrapper, PresentationWrapper, BookImg, IntroLabel, InputWrapper } from './styled';
import { SearchIcon } from '../../components/icons';
import RecentItem from '../../components/recent-item';
import SearchResultItems from '../../components/search-result-items';
import SearchResultsDescription from '../../components/search-results-description';
import searchClient from '../../algoliaClient';

const itemsDemo = [
    {
        id: 456,
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
        id: 58741,
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

const recentItemIdDemo = 47832;
const recentItemTitleDemo = 'Lorem Ipsum Title';

const Home = () => {
    return (
        <InstantSearch indexName="rainbow-books" searchClient={searchClient}>
            <Wrapper>
                <PresentationWrapper>
                    <BookImg />
                    <IntroLabel>Find Books</IntroLabel>
                </PresentationWrapper>

                <Configure hitsPerPage={8} />

                <InputWrapper
                    label={<HeadingLabel>Access 250,100 books</HeadingLabel>}
                    iconPosition="right"
                    icon={<SearchIcon />}
                />

                <RecentItem id={recentItemIdDemo} title={recentItemTitleDemo} />

                <SearchResultsDescription />

                <SearchResultItems items={itemsDemo} />
            </Wrapper>
        </InstantSearch>
    );
};

export default Home;
