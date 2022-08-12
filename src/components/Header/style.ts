import styled from 'styled-components';

export const Container = styled.header `
    width: 100%;
    padding: 15px;
    background: #fff;
    display: block;
    justify-content: center;
    align-items: center;
    box-shadow: ${(props) => props.theme.shadow};

    @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        display: flex;
        justify-content: space-between;
    }
`;

export const Title = styled.h1 `
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    width: 100%;
    font-size: 32px;
    @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        text-align: left;
    }
`;