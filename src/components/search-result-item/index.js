import React from 'react';
import PropTypes from 'prop-types';
import { Rating, Badge } from 'react-rainbow-components';
import {
    Container,
    LeftContent,
    RightContent,
    Cover,
    Info,
    Title,
    OutputContainer,
    OutputLabel,
    OutputValue,
    OutputValueBrand,
    RatingContainer,
    CategoriesContainer,
} from './styled';

const SearchResultItem = props => {
    const {
        title,
        autors,
        ratingCount,
        averageRating,
        language,
        cover,
        categories,
        publishedBy,
        className,
        style,
    } = props;

    return (
        <Container className={className} style={style}>
            <LeftContent>
                <Cover src={cover} />
                <Info>
                    <Title>{title}</Title>
                    <OutputContainer>
                        <OutputLabel>By:</OutputLabel>
                        <OutputValueBrand>{autors}</OutputValueBrand>
                    </OutputContainer>
                    <OutputContainer>
                        <OutputLabel>Published by:</OutputLabel>
                        <OutputValue>{publishedBy}</OutputValue>
                    </OutputContainer>
                    <OutputContainer>
                        <OutputLabel>Language:</OutputLabel>
                        <OutputValue>{language}</OutputValue>
                    </OutputContainer>
                </Info>
            </LeftContent>
            <RightContent>
                <RatingContainer>
                    <Rating value={averageRating} />
                    <OutputLabel>{ratingCount}</OutputLabel>
                </RatingContainer>
                <CategoriesContainer>
                    <OutputLabel>Categories</OutputLabel>
                    <Badge label={categories} />
                </CategoriesContainer>
            </RightContent>
        </Container>
    );
};

export default SearchResultItem;

SearchResultItem.propTypes = {
    title: PropTypes.string,
    autors: PropTypes.string,
    publishedBy: PropTypes.string,
    ratingCount: PropTypes.string,
    averageRating: PropTypes.string,
    language: PropTypes.string,
    cover: PropTypes.string,
    categories: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

SearchResultItem.defaultProps = {
    title: 'unknown',
    autors: 'unknown',
    publishedBy: 'unknown',
    ratingCount: '',
    averageRating: '',
    language: '',
    cover: '',
    categories: '',
    className: undefined,
    style: undefined,
};
