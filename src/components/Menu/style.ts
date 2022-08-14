import styled from 'styled-components'

export const Container = styled.nav`
  margin-bottom: 20px;
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-around;
    @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      justify-content: start;
    }
  }
`