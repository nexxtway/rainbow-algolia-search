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
    const {
        title,
        author,
        publisher,
        language,
        cover,
        size,
        className,
        style,
        releaseDate,
        titleColor,
    } = props;

    const hasAuthor = !!author.length;
    const hasPublisher = !!publisher.length;
    const hasLanguage = !!language.length;
    const hasReleaseDate = !!releaseDate;

    return (
        <Wrapper className={className} style={style}>
            <Img src={cover} size={size} />
            <Details>
                <Title titleColor={titleColor} size={size}>
                    {title}
                </Title>

                <RenderIf isTrue={hasAuthor}>
                    <Metadata size={size}>
                        By:
                        <MetadataFeaturedValue>{author}</MetadataFeaturedValue>
                    </Metadata>
                </RenderIf>

                <RenderIf isTrue={hasPublisher}>
                    <Metadata size={size}>
                        Published by:
                        <MetadataFeaturedValue>{publisher}</MetadataFeaturedValue>
                    </Metadata>
                </RenderIf>

                <RenderIf isTrue={hasLanguage}>
                    <Metadata size={size}>
                        Language:
                        <MetadataValue>{getLanguajeName(language)}</MetadataValue>
                    </Metadata>
                </RenderIf>

                <RenderIf isTrue={hasReleaseDate}>
                    <Metadata size={size}>
                        Release Date:
                        <MetadataValue>{releaseDate}</MetadataValue>
                    </Metadata>
                </RenderIf>
            </Details>
        </Wrapper>
    );
};

export default ItemInfo;

ItemInfo.propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.oneOf(['main', 'brand']),
    author: PropTypes.string,
    publisher: PropTypes.string,
    language: PropTypes.string,
    cover: PropTypes.string,
    size: PropTypes.oneOf(['normal', 'large']),
    className: PropTypes.string,
    style: PropTypes.object,
    releaseDate: PropTypes.number,
};
ItemInfo.defaultProps = {
    title: '',
    titleColor: 'brand',
    author: '',
    publisher: '',
    language: '',
    cover: '',
    size: 'normal',
    className: undefined,
    style: undefined,
    releaseDate: 0,
};
