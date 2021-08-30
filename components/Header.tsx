import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <section className="header">
      <Container className="p-4">
        <div className="d-md-flex justify-content-between align-items-center">
          <div>
            <h2 className="m-0">ANY LOGO</h2>
          </div>
          <ul className="nav-menu d-flex justify-content-between">
            <li>
              <Link href="/">
                <a
                  style={{
                    color: pathname === "/" ? "orangered" : "#1f1f1f",
                  }}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a
                  style={{
                    color: pathname === "/about" ? "orangered" : "#1f1f1f",
                  }}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a
                  style={{
                    color: pathname === "/contact" ? "orangered" : "#1f1f1f",
                  }}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Header;
