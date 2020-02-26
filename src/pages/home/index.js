import React from 'react';
import { InstantSearch, Configure, connectStateResults } from 'react-instantsearch-dom';
import { HeadingLabel, ContainerMedium } from '../../styled';
import {
    Wrapper,
    PresentationWrapper,
    BookImg,
    IntroLabel,
    InputWrapper,
    StyledAlgoliaLogo,
} from './styled';
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
        <ContainerMedium>
            <InstantSearch indexName="rainbow-books" searchClient={searchClient}>
                <WrapperAlgolia>
                    <PresentationWrapperAlgolia>
                        <BookImgAlgolia />
                        <IntroLabelAlgolia>Find Books</IntroLabelAlgolia>
                        <Configure hitsPerPage={3} />
                        <InputWrapper
                            label={
                                <HeadingLabelAlgolia>
                                    Find your favorite book among our <ResultCount /> books
                                </HeadingLabelAlgolia>
                            }
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

                        <DisplayIfQueryInput>
                            <StyledAlgoliaLogo />
                        </DisplayIfQueryInput>
                    </PresentationWrapperAlgolia>
                </WrapperAlgolia>
            </InstantSearch>
        </ContainerMedium>
    );
};

export default Home;
