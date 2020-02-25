import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, ProgressWrapper, ProgressBar, Percentage } from './styled';

const progressBarConfig = {
    size: 'small',
    variant: 'success',
};

const ItemStats = props => {
    const { ratingStats, className, style } = props;

    const hasStats = !!ratingStats.length;

    if (hasStats) {
        return (
            <div className={className} style={style}>
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
            </div>
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
