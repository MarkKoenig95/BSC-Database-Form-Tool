import { Container, Nav } from "react-bootstrap";

export default function Page({ children }) {
  return <Container className="m-4 p-4">{children}</Container>;
}
