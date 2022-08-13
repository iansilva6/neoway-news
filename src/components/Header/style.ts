import styled from 'styled-components';

export const Container = styled.header `
    width: 100%;
    padding: 15px;
    background: ${(props) => props.theme.colors.white};
    display: block;
    justify-content: center;
    align-items: center;
    box-shadow: ${(props) => props.theme.shadow};
    margin-bottom: 20px;
    @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
    }
`;

export const Title = styled.h1 `
    color: ${(props) => props.theme.colors.black};
    text-align: center;
    width: 100%;
    font-size: 32px;
    margin-bottom: 0px;
    font-weight: 900;
    @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        text-align: left;
    }
`;

export const Subtitle = styled.h1 `
    color: ${(props) => props.theme.colors.grey};
    text-align: center;
    width: 100%;
    font-size: 16px;
    margin-bottom: 20px;
    @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        text-align: left;
        margin-bottom: 0px;
    }
`;