import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label } from './styled';

const Subtitle = props => {
    const { children, className, style } = props;

    return (
        <Wrapper className={className} style={style}>
            <Label>{children}</Label>
        </Wrapper>
    );
};

export default Subtitle;

Subtitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

Subtitle.defaultProps = {
    children: null,
    className: null,
    style: null,
};
