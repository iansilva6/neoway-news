import { NavbarBrand } from 'react-bootstrap'
import { Container, Title } from './style'
import { FilterForm } from '../FilterForm'

type Props = {
  applyFilters: React.FormEventHandler<HTMLFormElement>
}

export const Header: React.FC<Props> = ({applyFilters}) => {
  return (
    <Container>
      <NavbarBrand href={"/"}>
        <Title>Neoway News</Title>
      </NavbarBrand>
      <FilterForm 
        applyFilters={applyFilters}
      />
    </Container>
  );
};
