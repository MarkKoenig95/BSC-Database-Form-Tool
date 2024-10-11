import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

export default function Incrementer(props) {
  const { setValue, title, value } = props;
  console.log(value);

  function changeValue(amount) {
    setValue(value + amount);
  }

  return (
    <Container>
      <Row>
        <Col xs={8} sm={8} md={8} lg={8}>
          <InputGroup className="mb-3">
            <InputGroup.Text>{title}</InputGroup.Text>
          </InputGroup>
        </Col>
        <Col xs={4} md={4} lg={4}>
          <InputGroup className="mb-3">
            <Button
              variant="outline-secondary"
              id="button-addon1"
              onClick={() => {
                changeValue(1);
              }}
            >
              +
            </Button>
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              className="text-align-center"
              value={value}
              onChange={({ target }) => {
                setValue(parseInt(target.value, 10));
              }}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={() => {
                changeValue(-1);
              }}
            >
              -
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}
