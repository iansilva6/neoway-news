import { NavbarBrand } from 'react-bootstrap'
import { Container, Title } from './style'
import { FilterForm } from '../FilterForm'

export const Header = () => {
  return (
    <Container>
      <NavbarBrand href={"/"}>
        <Title>Neoway News</Title>
      </NavbarBrand>
      <FilterForm />
    </Container>
  );
};
