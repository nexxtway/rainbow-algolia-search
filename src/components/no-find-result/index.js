import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, Description } from './styled';
import { NoResultIcon } from '../icons';

export default function NoResult(props) {
    const { className, style } = props;
    return (
        <Wrapper className={className} style={style}>
            <NoResultIcon />
            <Label>Sorry</Label>
            <Description>Our robots did not find any book with this datas…</Description>
        </Wrapper>
    );
}

NoResult.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

NoResult.defaultProps = {
    className: '',
    style: {},
};
