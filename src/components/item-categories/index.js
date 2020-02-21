import React from 'react';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import PropTypes from 'prop-types';
import { Badge } from 'react-rainbow-components';
import { Wrapper, Label } from './styled';

const ItemCategories = props => {
    const { hideLabel, className, style, categories } = props;

    const hasCategories = !!categories.length;

    return (
        <RenderIf isTrue={hasCategories}>
            <Wrapper className={className} style={style}>
                <RenderIf isTrue={!hideLabel}>
                    <Label>Categories</Label>
                </RenderIf>

                {categories.map((category, index) => {
                    const key = `${category}-${index}`;

                    return <Badge label={category} key={key} />;
                })}
            </Wrapper>
        </RenderIf>
    );
};

export default ItemCategories;

ItemCategories.propTypes = {
    hideLabel: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    categories: PropTypes.array,
};
ItemCategories.defaultProps = {
    hideLabel: false,
    className: undefined,
    style: undefined,
    categories: [],
};
