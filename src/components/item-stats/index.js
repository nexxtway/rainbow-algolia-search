import React from 'react';
import PropTypes from 'prop-types';
import { Application } from 'react-rainbow-components';
import { Wrapper, Label, ProgressWrapper, ProgressBar, Percentage } from './styled';

const progressBarConfig = {
    size: 'small',
    variant: 'success',
};

const theme = {
    rainbow: {
        palette: {
            success: '#ffb900',
        },
    },
};

const ItemStats = props => {
    const { ratingStats, className, style } = props;

    const hasStats = !!ratingStats.length;

    if (hasStats) {
        return (
            <Application className={className} style={style} theme={theme}>
                {ratingStats.map(stat => (
                    <Wrapper key={stat.baseStat}>
                        <Label>{stat.baseStat} stars</Label>
                        <ProgressWrapper>
                            <ProgressBar
                                value={stat.percentage}
                                size={progressBarConfig.size}
                                variant={progressBarConfig.variant}
                            />
                            <Percentage>{stat.percentage} %</Percentage>
                        </ProgressWrapper>
                    </Wrapper>
                ))}
            </Application>
        );
    }
    return null;
};

export default ItemStats;

ItemStats.propTypes = {
    ratingStats: PropTypes.array,
    className: PropTypes.string,
    style: PropTypes.object,
};
ItemStats.defaultProps = {
    ratingStats: [],
    className: undefined,
    style: undefined,
};
