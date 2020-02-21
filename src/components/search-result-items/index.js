import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import SearchResultItem from '../search-result-item';

const SearchResults = props => {
    const { className, style, items } = props;

    const hasItems = !!items.length;

    return (
        <RenderIf isTrue={hasItems} className={className} style={style}>
            {items.map(item => (
                <SearchResultItem
                    id={item.id}
                    title={item.title}
                    author={item.author}
                    ratingCount={item.ratingCount}
                    averageRating={item.averageRating}
                    language={item.language}
                    cover={item.cover}
                    categories={item.categories}
                    key={item.title}
                />
            ))}
        </RenderIf>
    );
};

export default SearchResults;

SearchResults.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    items: PropTypes.array,
};
SearchResults.defaultProps = {
    className: undefined,
    style: undefined,
    items: [],
};
