import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const ItemList = ({ component: Component, items }) => {
    return items.map((item, index) => {
        const key = `item_${index}`;
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <Component {...item} key={key} />;
    });
};

const ResultsAlgoliaAdapter = ({ component, hits }) => {
    return (
        <div>
            <ItemList component={component} items={hits} />
        </div>
    );
};

ResultsAlgoliaAdapter.propTypes = {
    component: PropTypes.func.isRequired,
    hits: PropTypes.array.isRequired,
};

const ResultsAlgolia = connectHits(ResultsAlgoliaAdapter);

export default ResultsAlgolia;
