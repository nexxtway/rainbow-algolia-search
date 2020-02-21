import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { HeadingLabel } from '../../styled';
import { Wrapper, Link } from './styled';

const RecentItem = props => {
    const { id, title, className, style } = props;

    const hasValues = !!(id && title);

    const itemUrl = hasValues ? `/book/${id}` : '';

    return (
        <RenderIf isTrue={hasValues}>
            <Wrapper className={className} style={style}>
                <HeadingLabel>
                    Recent Book:
                    <Link href={itemUrl}>{title}</Link>
                </HeadingLabel>
            </Wrapper>
        </RenderIf>
    );
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
