import React from 'react';
import { InputCallToAction } from '../../styled';
import { RecentItemLink } from './styled';

const recentItem = 'You Don’t Know JS';

const RecentItem = () => {
    if (recentItem) {
        return (
            <InputCallToAction>
                Recent Book:
                <RecentItemLink href="#">{recentItem}</RecentItemLink>
            </InputCallToAction>
        );
    }
    return null;
};

export default RecentItem;
