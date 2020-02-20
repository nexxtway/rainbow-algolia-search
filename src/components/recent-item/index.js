import React from 'react';
import PropTypes from 'prop-types';
import { HeadingLabel } from '../../styled';
import { Wrapper, Link } from './styled';

const RecentItem = props => {
    const { id, title, className, style } = props;

    const hasValues = !!(id && title);

    const itemUrl = hasValues ? `/book/${id}` : '';

    if (hasValues) {
        return (
            <Wrapper className={className} style={style}>
                <HeadingLabel>
                    Recent Book:
                    <Link href={itemUrl}>{title}</Link>
                </HeadingLabel>
            </Wrapper>
        );
    }
    return null;
};

export default RecentItem;

RecentItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

RecentItem.defaultProps = {
    id: null,
    title: '',
    className: undefined,
    style: undefined,
};
