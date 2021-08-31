import { Container } from "react-bootstrap";

const AboutBody = () => {
  return (
    <section>
      <Container>
        <p className="home-text mt-5">About</p>
        <div className="about-details mb-5">
          <div className="img-left"></div>
          <div className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since th 1500s, when an unknown printer took a galley of
            type and scrambled it in Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBody;
