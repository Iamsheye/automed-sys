import { useContext } from "react";
import { Container } from "react-bootstrap";
import { countContext } from "../pages/_app";

const HomeBody = () => {
  const { count, setCount } = useContext<any>(countContext);

  const decrement = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <section>
      <Container>
        <p className="home-text">Home</p>
        <div className="count-details d-flex justify-content-center align-items-center">
          <button
            className="change-btn"
            onClick={() => decrement()}
            disabled={count <= 0}
          >
            Down
          </button>
          <div className="count-num">{count}</div>
          <button className="change-btn" onClick={() => setCount(count + 1)}>
            Up
          </button>
        </div>
      </Container>
    </section>
  );
};

export default HomeBody;
