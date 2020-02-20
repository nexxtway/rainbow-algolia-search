import React from 'react';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import PropTypes from 'prop-types';
import {
    Wrapper,
    Img,
    Details,
    Title,
    Metadata,
    MetadataValue,
    MetadataFeaturedValue,
} from './styled';

const ItemRating = props => {
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
                        <MetadataValue>{language}</MetadataValue>
                    </Metadata>
                </RenderIf>
            </Details>
        </Wrapper>
    );
};

export default ItemRating;

ItemRating.propTypes = {
    title: PropTypes.number,
    author: PropTypes.string,
    publisher: PropTypes.string,
    language: PropTypes.string,
    cover: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
ItemRating.defaultProps = {
    title: '',
    author: '',
    publisher: '',
    language: '',
    cover: '',
    className: undefined,
    style: undefined,
};
