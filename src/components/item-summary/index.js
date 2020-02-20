import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styled';
import Subtitle from '../subtitle';

const ItemSummary = props => {
    const { summary, className, style } = props;

    const hasSummary = !!summary.length;

    if (hasSummary) {
        return (
            <Wrapper className={className} style={style}>
                <Subtitle>Publisher&#x27;s Summary</Subtitle>
                <Content>{summary}</Content>
            </Wrapper>
        );
    }
    return null;
};

export default ItemSummary;

ItemSummary.propTypes = {
    summary: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};
ItemSummary.defaultProps = {
    summary: '',
    className: undefined,
    style: undefined,
};
