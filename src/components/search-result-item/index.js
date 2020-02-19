import React from 'react';
import { Rating, Badge } from 'react-rainbow-components';
import {
    ResultItemWrapper,
    ResultItemContainer,
    ResultItemContent,
    ResultInfoWrapper,
    ResultItemImg,
    ItemInfo,
    ItemTitleHeading,
    ItemInfoMetadata,
    ItemInfoMetaAuthor,
    ItemInfoMetaValue,
    ResultRatingLite,
    ResultRatingLabel,
    ResultCategoriesWrapper,
    ResultCategoriesLabel,
    RatingMetadata,
} from './styled';

const SearchResultItem = props => {
    const { title, authors, ratingCount, averageRating, language, cover, categories } = props;

    return (
        <ResultItemWrapper>
            <ResultItemContainer>
                <ResultItemContent>
                    <ResultInfoWrapper>
                        <ResultItemImg src="https://uploads-ssl.webflow.com/5e46eb28f540698137a3a5b3/5e47268c6fdb67cb98b7dcb4_tmp-book.png" />
                        <ItemInfo>
                            <ItemTitleHeading>
                                You Don&#x27;t Know JS: Up and Going
                            </ItemTitleHeading>
                            <ItemInfoMetadata>
                                By:
                                <ItemInfoMetaAuthor href="http://google.com">
                                    Kyle Simpson
                                </ItemInfoMetaAuthor>
                            </ItemInfoMetadata>
                            <ItemInfoMetadata>
                                Published by:
                                <ItemInfoMetaValue>O&#x27;Reily</ItemInfoMetaValue>
                            </ItemInfoMetadata>
                            <ItemInfoMetadata>
                                Language:
                                <ItemInfoMetaValue>English</ItemInfoMetaValue>
                            </ItemInfoMetadata>
                        </ItemInfo>
                    </ResultInfoWrapper>
                    <RatingMetadata>
                        <ResultRatingLite>
                            <Rating />
                            <ResultRatingLabel>58 Ratings</ResultRatingLabel>
                        </ResultRatingLite>
                        <ResultCategoriesWrapper>
                            <ResultCategoriesLabel>Categories</ResultCategoriesLabel>
                            <Badge label="Category 1" />
                        </ResultCategoriesWrapper>
                    </RatingMetadata>
                </ResultItemContent>
            </ResultItemContainer>
        </ResultItemWrapper>
    );
};

export default SearchResultItem;
