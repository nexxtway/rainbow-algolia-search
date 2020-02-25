import { Avatar as RainbowAvatar } from 'react-rainbow-components';
import styled from 'styled-components';
import { MediaSizes } from '../../constants';

export const Wrapper = styled.div`
    margin-bottom: 20px;
    padding-bottom: 17px;
    border-bottom: 1px solid rgba(164, 167, 187, 0.17);

    :last-child {
        border-bottom-style: none;
    }
`;

export const HeadingWrapper = styled.div`
    display: flex;
    margin-bottom: 12px;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    line-height: 1.56em;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: ${MediaSizes.sm.width}) {
        margin-bottom: 5px;
    }
`;

export const Avatar = styled(RainbowAvatar)`
    width: 32px;
    height: 32px;
`;

export const AvatarLabel = styled.p.attrs(props => {
    return props.theme.rainbow.palette;
})`
    margin-left: 12px;
    color: ${props => props.text.main};
    font-size: 18px;
    line-height: 1em;
`;

export const ReviewWrapper = styled.p`
    font-size: 15px;
    line-height: 1.56em;
`;
