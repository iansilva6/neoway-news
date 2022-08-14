import { NavbarBrand } from 'react-bootstrap'
import { Container, Title, Subtitle } from './style'
import { Menu } from '../Menu';

export const Header = () => {
  return (
    <Container>
      <NavbarBrand href={"/"}>
        <Title>Neoway News</Title>
        <Subtitle>Nóticias sobre criptomoedas</Subtitle>
      </NavbarBrand>
      <Menu />
    </Container>
  );
};
