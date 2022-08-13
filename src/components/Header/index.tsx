import { NavbarBrand } from 'react-bootstrap'
import { Container, Title, Subtitle } from './style'
import { FilterForm } from '../FilterForm'

type Props = {
  applyFilters: React.FormEventHandler<HTMLFormElement>;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const Header: React.FC<Props> = ({applyFilters, handleChange}) => {
  return (
    <Container>
      <NavbarBrand href={"/"}>
        <Title>Neoway News</Title>
        <Subtitle>Nóticias sobre criptomoedas</Subtitle>
      </NavbarBrand>
      <FilterForm 
        applyFilters={applyFilters}
        handleChange={handleChange}
      />
    </Container>
  );
};
