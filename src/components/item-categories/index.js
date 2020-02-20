import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-rainbow-components';
import { Wrapper, Label } from './styled';

const ItemCategories = props => {
    const { className, style, categories } = props;

    const hasCategories = !!categories.length;

    if (hasCategories) {
        return (
            <Wrapper className={className} style={style}>
                <Label>Categories</Label>

                {categories.map((category, index) => {
                    const key = `${category}-${index}`;

                    return <Badge label={category} key={key} />;
                })}
            </Wrapper>
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
