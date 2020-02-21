import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, FlexWrapper } from './styled';
import Subtitle from '../subtitle';
import ItemRelatedPurchase from '../item-related-purchase';

const ItemRelatedPurchases = props => {
    const { items, className, style } = props;

    const hasItems = !!items.length;

    const limit = 6;

    if (hasItems) {
        return (
            <Wrapper className={className} style={style}>
                <Subtitle>People who bought this also bought...</Subtitle>

                <FlexWrapper>
                    {items.slice(0, limit).map((item, index) => {
                        const { id, title, cover } = item;
                        const key = `${id}-${index}`;

                        return (
                            <ItemRelatedPurchase key={key} id={id} title={title} cover={cover} />
                        );
                    })}
                </FlexWrapper>
            </Wrapper>
        );
    }
    return null;
};

export default ItemRelatedPurchases;

ItemRelatedPurchases.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
};
ItemRelatedPurchases.defaultProps = {
    items: null,
    className: undefined,
    style: undefined,
};
