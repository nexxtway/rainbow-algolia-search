import React from 'react';
import PropTypes from 'prop-types';
import SearchResultItem from '../search-result-item';

const SearchResults = props => {
    const { className, style, items } = props;

    const hasItems = !!items.length;

    if (hasItems) {
        return (
            <div className={className} style={style}>
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
            </div>
        );
    }
    return null;
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
