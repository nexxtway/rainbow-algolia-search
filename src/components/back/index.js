import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Link } from './styled';

const Back = props => {
    const { url, className, style } = props;

    const hasUrl = !!url.length;

    if (hasUrl) {
        return (
            <Wrapper className={className} style={style}>
                <Link href={url}>Back</Link>
            </Wrapper>
        );
    }
    return null;
};

export default Back;

Back.propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
Back.defaultProps = {
    url: '',
    className: undefined,
    style: undefined,
};
