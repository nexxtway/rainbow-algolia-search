import React from 'react';
import PropTypes from 'prop-types';

const MoonIcon = props => {
    const { className, style } = props;

    return (
        <svg
            className={className}
            style={style}
            width="28px"
            height="30px"
            viewBox="0 0 28 30"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="layout" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="main" transform="translate(-1296.000000, -30.000000)" fillRule="nonzero">
                    <g id="night" transform="translate(1296.000000, 30.000000)">
                        <path
                            d="M27.736375,21.708 C27.468375,21.378 27.018375,21.256 26.622375,21.398 C25.512375,21.796 24.308375,22 23.040375,22 C16.974375,22 12.040375,17.064 12.040375,11 C12.040375,7.35 13.842375,3.952 16.860375,1.908 C17.202375,1.676 17.366375,1.258 17.274375,0.856 C17.182375,0.454 16.852375,0.15 16.442375,0.09 C15.974375,0.022 15.508375,0 15.040375,0 C6.768375,0 0.040375,6.728 0.040375,15 C0.040375,23.272 6.768375,30 15.040375,30 C20.290375,30 25.066375,27.332 27.812375,22.864 C28.034375,22.502 28.002375,22.04 27.736375,21.708 Z"
                            id="Path"
                            fill="#1B5C91"
                        />
                        <path
                            d="M0.040375,15 C0.040375,23.272 6.768375,30 15.040375,30 C20.290375,30 25.066375,27.332 27.812375,22.864 C7.42711546,32.057266 0.578916814,15 0.040375,15 Z"
                            id="Path"
                            fillOpacity="0.295044799"
                            fill="#0E2E4B"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

MoonIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

MoonIcon.defaultProps = {
    className: undefined,
    style: undefined,
};

export default MoonIcon;
