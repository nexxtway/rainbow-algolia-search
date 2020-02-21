import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ArrowImg, Link } from './styled';

const BackLink = props => {
    const { url, className, style } = props;

    const hasUrl = !!url.length;

    if (hasUrl) {
        return (
            <Wrapper className={className} style={style}>
                <ArrowImg />
                <Link href={url}>Back</Link>
            </Wrapper>
        );
    }
    return null;
};

export default BackLink;

BackLink.propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
BackLink.defaultProps = {
    url: '',
    className: undefined,
    style: undefined,
};
