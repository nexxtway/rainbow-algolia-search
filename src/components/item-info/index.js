import React from 'react';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import PropTypes from 'prop-types';
import { getLanguajeName } from '../helpers';
import {
    Wrapper,
    Img,
    Details,
    Title,
    Metadata,
    MetadataValue,
    MetadataFeaturedValue,
} from './styled';

const ItemInfo = props => {
    const { title, author, publisher, language, cover, className, style } = props;

    const hasAuthor = !!author.length;
    const hasPublisher = !!publisher.length;
    const hasLanguage = !!language.length;

    return (
        <Wrapper className={className} style={style}>
            <Img src={cover} />
            <Details>
                <Title>{title}</Title>

                <RenderIf isTrue={hasAuthor}>
                    <Metadata>
                        By:
                        <MetadataFeaturedValue>{author}</MetadataFeaturedValue>
                    </Metadata>
                </RenderIf>

                <RenderIf isTrue={hasPublisher}>
                    <Metadata>
                        Published by:
                        <MetadataValue>{publisher}</MetadataValue>
                    </Metadata>
                </RenderIf>

                <RenderIf isTrue={hasLanguage}>
                    <Metadata>
                        Language:
                        <MetadataValue>{getLanguajeName(language)}</MetadataValue>
                    </Metadata>
                </RenderIf>
            </Details>
        </Wrapper>
    );
};

export default ItemInfo;

ItemInfo.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    publisher: PropTypes.string,
    language: PropTypes.string,
    cover: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
ItemInfo.defaultProps = {
    title: '',
    author: '',
    publisher: '',
    language: '',
    cover: '',
    className: undefined,
    style: undefined,
};
