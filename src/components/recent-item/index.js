import React from 'react';
import PropTypes from 'prop-types';
import { HeadingLabel } from '../../styled';
import { RecentItemLink } from './styled';

const RecentItem = props => {
    const { recentItem } = props;

    if (recentItem) {
        return (
            <HeadingLabel>
                Recent Book:
                <RecentItemLink href="#">{recentItem}</RecentItemLink>
            </HeadingLabel>
        );
    }
    return null;
};

export default RecentItem;

RecentItem.propTypes = {
    recentItem: PropTypes.string,
};

RecentItem.defaultProps = {
    recentItem: '',
};
