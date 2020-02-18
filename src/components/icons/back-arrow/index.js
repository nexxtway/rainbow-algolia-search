import React from 'react';
import PropTypes from 'prop-types';

const BackArrowIcon = props => {
    const { className, style } = props;

    return (
        <svg
            className={className}
            style={style}
            width="26px"
            height="20px"
            viewBox="0 0 26 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="layout" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="book-summary"
                    transform="translate(-53.000000, -116.000000)"
                    fill="#44D7B6"
                    fillRule="nonzero"
                >
                    <g id="Group-2" transform="translate(53.000000, 109.000000)">
                        <path
                            d="M8.56993336,7.26111178 C8.91664447,6.91355622 9.47948892,6.91288956 9.82708892,7.25955622 C10.1746445,7.60626733 10.1753111,8.16911178 9.82864447,8.51666733 L9.82864447,8.51666733 L2.295,16.067 L24.8666,16.0671118 C25.3197693,16.0671118 25.6937148,16.4061982 25.7485634,16.8445326 L25.7554889,16.9560451 C25.7554889,17.4470229 25.3575334,17.8449784 24.8665556,17.8449784 L24.8665556,17.8449784 L2.296,17.844 L9.82864447,25.3953784 C10.146463,25.713971 10.1723503,26.2134661 9.90675155,26.5615587 L9.82708892,26.6524896 C9.65362225,26.8255562 9.42642225,26.9120896 9.19931114,26.9120896 C8.97140003,26.9120896 8.74362225,26.8250673 8.56993336,26.6509784 L8.56993336,26.6509784 L0.779133362,18.8409784 C-0.259844416,17.8020007 -0.259844416,16.110134 0.779933362,15.0703562 L0.779933362,15.0703562 Z"
                            id="arrow-back"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

BackArrowIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object]),
};
BackArrowIcon.defaultProps = {
    className: undefined,
    style: undefined,
};

export default BackArrowIcon;
