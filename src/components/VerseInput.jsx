import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

export default function VerseInput(props) {
  const {
    bibleBooks,
    bookNumber,
    chapter,
    verse,
    setBookNumber,
    setChapter,
    setVerse,
    title,
  } = props;
  const bookName = bibleBooks[bookNumber].BookName;

  return (
    <Container>
      <Row>
        <Col xs={12} sm={4} md={6} lg={8}>
          <InputGroup className="mb-3">
            <InputGroup.Text>{title}</InputGroup.Text>
          </InputGroup>
        </Col>
        <Col xs={8} md={6} lg={4}>
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title={bookName}
              id="input-group-dropdown-1"
            >
              {bibleBooks.map((bibleBook) => (
                <Dropdown.Item
                  key={title + bibleBook.BookName + bibleBook.BibleBookID}
                  href="#"
                  onClick={() => {
                    setBookNumber(bibleBook.BibleBookID);
                  }}
                >
                  {bibleBook.BookName}
                </Dropdown.Item>
              ))}
            </DropdownButton>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={chapter}
              onChange={({ target }) => {
                let { value } = target;
                if (value) {
                  setChapter(parseInt(value, 10));
                } else {
                  setChapter("");
                }
              }}
            />
            <InputGroup.Text>:</InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={verse}
              onChange={({ target }) => {
                let { value } = target;
                if (value) {
                  setVerse(parseInt(value, 10));
                } else {
                  setVerse("");
                }
              }}
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}
