import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useRouter();

  const calcClass = () => {
    let defClass = "nav-menu d-flex justify-content-between";
    if (showMenu) {
      return defClass + " show";
    } else {
      return defClass;
    }
  };

  return (
    <section className="header">
      <Container className="p-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="m-0">ANY LOGO</h2>
          </div>
          <ul className={calcClass()}>
            <CgClose
              className="d-md-none close"
              onClick={() => setShowMenu(false)}
            />
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
          <FaBars className="d-md-none" onClick={() => setShowMenu(true)} />
        </div>
      </Container>
    </section>
  );
};

export default Header;
