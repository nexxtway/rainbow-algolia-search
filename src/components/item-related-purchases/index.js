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
                        const key = `${item}-${index}`;

                        return (
                            <div key={key}>
                                <ItemRelatedPurchase
                                    id={item.id}
                                    title={item.title}
                                    cover={item.cover}
                                />
                            </div>
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
