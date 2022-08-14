import styled from "styled-components";

export const New = styled.article`
  box-shadow: ${(props) => props.theme.shadow};
  background: ${(props) => props.theme.colors.white};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 100%;
    margin-bottom: 20px;
    @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      margin-bottom: 0px;
      width: 300px;
    }
  }
  span {
    color: ${(props) => props.theme.colors.grey};
  }
`