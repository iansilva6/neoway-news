import { Form, Button } from 'react-bootstrap'

export const FilterForm = () => {
  return (
    <Form className={"d-flex align-items-end justify-content-center"}>
      <Form.Group className="me-3" controlId="orderBy">
        <Form.Label>Ordenar:</Form.Label>
        <Form.Select aria-label="Ordenar por">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="me-3" controlId="filterBy">
        <Form.Label>Filtrar:</Form.Label>
        <Form.Select aria-label="Filtrar por">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Aplicar
      </Button>
    </Form>
  );
};
