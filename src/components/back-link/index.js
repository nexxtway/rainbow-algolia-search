import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { Wrapper, ArrowImg, Link } from './styled';

const BackLink = props => {
    const { url, className, style } = props;

    const hasUrl = !!url;

    return (
        <RenderIf isTrue={hasUrl}>
            <Wrapper className={className} style={style}>
                <Link to={url}>
                    <ArrowImg />
                    Back
                </Link>
            </Wrapper>
        </RenderIf>
    );
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
