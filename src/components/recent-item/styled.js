import styled from 'styled-components';

export const RecentItemLink = styled.a`
    padding-right: 25px;
    background-image: url('/assets/icons/forward-arrow-curved.svg');
    background-position: 100% 50%;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    margin-left: 5px;

    @media screen and (max-width: 767px) {
        background-size: 12px 12px;
    }
`;
