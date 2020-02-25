import React from 'react';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import PropTypes from 'prop-types';
import { LinkWrapper, Mask, HiddenCover, Title } from './styled';

const ItemRelatedPurchase = props => {
    const { id, title, cover, className, style } = props;

    const hasId = !!id;
    const hasTitle = !!title;
    const hasCover = !!cover;

    const url = hasId ? `/book/${id}` : ``;

    if (hasId && hasTitle) {
        return (
            <LinkWrapper to={url} className={className} style={style} backgroundImage={cover}>
                <RenderIf isTrue={hasCover}>
                    <HiddenCover src={cover} />
                </RenderIf>
                <Mask>
                    <Title className="related-title">{title}</Title>
                </Mask>
            </LinkWrapper>
        );
    }
    return null;
};

export default ItemRelatedPurchase;

ItemRelatedPurchase.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

ItemRelatedPurchase.defaultProps = {
    id: '0',
    title: '',
    cover: '',
    className: undefined,
    style: undefined,
};
