import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import ItemCategories from '../item-categories';
import ItemRating from '../item-rating';
import ItemInfo from '../item-info';
import { Wrapper, LinkWrapper, FlexWrapper, FlexRight, CategoriesWrapper } from './styled';

const SearchResultItem = props => {
    const {
        objectID,
        title,
        authors,
        publisher,
        ratingCount,
        averageRating,
        language,
        cover,
        categories,
        className,
        style,
    } = props;

    const bookUrl = `/book/${objectID}`;

    const hasCategories = !!categories.length;

    return (
        <Wrapper className={className} style={style}>
            <LinkWrapper to={bookUrl}>
                <FlexWrapper>
                    <div>
                        <ItemInfo
                            title={title}
                            author={authors}
                            publisher={publisher}
                            language={language}
                            cover={cover}
                        />
                    </div>
                    <FlexRight>
                        <ItemRating
                            averageRating={Math.round(Number(averageRating))}
                            ratingCount={ratingCount}
                        />

                        <RenderIf isTrue={hasCategories}>
                            <CategoriesWrapper>
                                <ItemCategories categories={categories} />
                            </CategoriesWrapper>
                        </RenderIf>
                    </FlexRight>
                </FlexWrapper>
            </LinkWrapper>
        </Wrapper>
    );
};

export default SearchResultItem;

SearchResultItem.propTypes = {
    objectID: PropTypes.any,
    title: PropTypes.string,
    authors: PropTypes.string,
    publisher: PropTypes.string,
    ratingCount: PropTypes.number,
    averageRating: PropTypes.number,
    language: PropTypes.string,
    cover: PropTypes.string,
    categories: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
};
SearchResultItem.defaultProps = {
    objectID: null,
    title: '',
    authors: '',
    publisher: '',
    ratingCount: 0,
    averageRating: '0',
    language: '',
    cover: '',
    categories: [],
    className: undefined,
    style: undefined,
};
