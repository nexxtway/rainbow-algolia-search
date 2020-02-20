import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-rainbow-components';
import { ResultItemCategoriesWrapper } from './styled';

const styles = {
    label: {
        fontSize: '14px',
        marginBottom: '6px',
    },
};

const ItemCategories = props => {
    const { className, style, categories } = props;

    const hasCategories = !!categories.length;

    if (hasCategories) {
        return (
            <ResultItemCategoriesWrapper className={className} style={style}>
                <p style={styles.label}>Categories</p>

                {categories.map((category, index) => {
                    const key = `${category}-${index}`;

                    return <Badge label={category} key={key} />;
                })}
            </ResultItemCategoriesWrapper>
        );
    }
    return null;
};

export default ItemCategories;

ItemCategories.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    categories: PropTypes.array,
};
ItemCategories.defaultProps = {
    className: undefined,
    style: undefined,
    categories: [],
};
