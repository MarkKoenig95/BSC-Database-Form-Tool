import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

export default function TypeSelector(props) {
  const { setType, type, types, title } = props;

  return (
    <Container className="mb-5">
      <Form.Label>{title}</Form.Label>
      <DropdownButton
        variant="outline-secondary"
        title={type}
        id="input-group-dropdown-1"
      >
        {types.map((type) => (
          <Dropdown.Item
            key={title + type}
            href="#"
            onClick={() => {
              setType(type);
            }}
          >
            {type}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Container>
  );
}
