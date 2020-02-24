import React from 'react';
import { InstantSearch, Configure, connectStateResults } from 'react-instantsearch-dom';
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
    DisplayIfResults,
    DisplayIfNotResults,
} from '../../algolia-components/conditional-display';
import NoResult from '../../components/no-find-result';

const IntroLabelAlgolia = connectStateResults(IntroLabel);
const BookImgAlgolia = connectStateResults(BookImg);
const PresentationWrapperAlgolia = connectStateResults(PresentationWrapper);
const HeadingLabelAlgolia = connectStateResults(HeadingLabel);
const WrapperAlgolia = connectStateResults(Wrapper);

const Home = () => {
    return (
        <InstantSearch indexName="rainbow-books" searchClient={searchClient}>
            <WrapperAlgolia>
                <PresentationWrapperAlgolia>
                    <BookImgAlgolia />
                    <IntroLabelAlgolia>Find Books</IntroLabelAlgolia>
                    <Configure hitsPerPage={3} />
                    <InputWrapper
                        label={
                            <HeadingLabelAlgolia>
                                Access <ResultCount /> books
                            </HeadingLabelAlgolia>
                        }
                        iconPosition="right"
                        icon={<SearchIcon />}
                    />
                    <RecentItem />
                    <DisplayIfQueryInput>
                        <DisplayIfResults>
                            <SearchResultsDescription />
                        </DisplayIfResults>
                    </DisplayIfQueryInput>

                    <DisplayIfQueryInput>
                        <DisplayIfResults>
                            <ResultsAlgolia component={SearchResultItem} />
                        </DisplayIfResults>
                    </DisplayIfQueryInput>

                    <DisplayIfQueryInput>
                        <DisplayIfNotResults>
                            <NoResult />
                        </DisplayIfNotResults>
                    </DisplayIfQueryInput>
                </PresentationWrapperAlgolia>
            </WrapperAlgolia>
        </InstantSearch>
    );
};

export default Home;
