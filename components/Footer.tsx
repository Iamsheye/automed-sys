import { useContext } from "react";
import { Container } from "react-bootstrap";
import { countContext } from "../pages/_app";

const Footer = () => {
  const { count } = useContext<any>(countContext);

  return (
    // <Container>
      <section className="footer">
        <p className="footer-text">
          This is my footer, current count is
          <span> {count}</span>
        </p>
      </section>
    // </Container>
  );
};

export default Footer;
