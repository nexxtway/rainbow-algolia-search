import React from 'react';
import PropTypes from 'prop-types';

const ForwardArrowCurvedIcon = props => {
    const { className, style } = props;

    return (
        <svg
            className={className}
            style={style}
            width="18px"
            height="18px"
            viewBox="0 0 18 18"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="layout" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="main-recurrent"
                    transform="translate(-886.000000, -553.000000)"
                    fill="#44D7B6"
                    fillRule="nonzero"
                >
                    <g id="Group-2" transform="translate(536.000000, 545.000000)">
                        <path
                            d="M361.737719,8.07484098 C362.043607,7.9441785 362.395968,7.98663095 362.662069,8.1862069 L362.662069,8.1862069 L367.627586,11.9103448 C367.862026,12.0861748 368,12.3621225 368,12.6551724 C368,12.9482223 367.862026,13.2241701 367.627586,13.4 L367.627586,13.4 L362.662069,17.1241379 C362.250712,17.4326556 361.667138,17.349288 361.358621,16.937931 C361.050103,16.5265741 361.133471,15.9430004 361.544828,15.6344828 L361.544828,15.6344828 L364.430945,13.4699928 L364.362157,13.471278 C358.153076,13.6812345 351.861732,18.8636716 351.862069,25.0689655 C351.862069,25.5831617 351.445231,26 350.931034,26 C350.416838,26 349.999949,25.5831617 349.999949,25.0689655 C349.993423,17.9087424 356.977799,11.939247 364.133566,11.6164661 L361.544828,9.67586207 C361.278726,9.47628612 361.139311,9.149907 361.179098,8.81966857 C361.218886,8.48943014 361.431831,8.20550346 361.737719,8.07484098 Z"
                            id="link_arrow"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

ForwardArrowCurvedIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
ForwardArrowCurvedIcon.defaultProps = {
    className: undefined,
    style: undefined,
};

export default ForwardArrowCurvedIcon;
