import { Form, Button } from 'react-bootstrap'
import { HeaderFunctions } from '../../interfaces'

export const FilterForm: React.FC<HeaderFunctions> = ({applyFilters, handleChange}) => {
  return (
    <Form onSubmit={applyFilters} className={"d-flex align-items-end justify-content-center"}>
      <Form.Group className="me-3" controlId="orderBy">
        <Form.Label>Ordenar:</Form.Label>
        <Form.Select aria-label="Ordenar por" name={'orderBy'} onChange={handleChange}>
          <option value='publishedAt'>Data de publicação</option>
          <option value='relevancy'>Relevância</option>
          <option value='popularity'>Popularidade</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="me-3" controlId="filterBy">
        <Form.Label>Filtrar:</Form.Label>
        <Form.Select aria-label="Filtrar por" name={'filterBy'} onChange={handleChange}>
          <option value='crypto'>Todos</option>
          <option value='bitcoin'>Bitcoin</option>
          <option value='ethereum'>Ethereum</option>
          <option value='bnb'>BNB</option>
          <option value='xrp'>XRP</option>
          <option value='cardano'>Cardano</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Aplicar
      </Button>
    </Form>
  );
};
