import React from 'react';
import { InputCallToAction } from '../../../styled';
import { RecentItem } from './styled';

const recentBook = 'You Don’t Know JS';

const RecentBook = () => {
    if (recentBook) {
        return (
            <InputCallToAction>
                Recent Book:
                <RecentItem href="#">{recentBook}</RecentItem>
            </InputCallToAction>
        );
    }
    return null;
};

export default RecentBook;
