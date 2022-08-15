import styled from "styled-components";

export const Article = styled.article`
  background: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 20px;
  h2 {
    font-weight: 900;
  }
  span {
    color: ${(props) => props.theme.colors.grey};
  }
  a {
    text-decoration: underline;
  }
  img {
    max-width: 100%;
  }
`