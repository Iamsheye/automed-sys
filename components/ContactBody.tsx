import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiTwotonePhone } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

interface Message {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactBody = () => {
  const [formData, setFormdata] = useState<Message>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("FORM SUBMITTED")
    setFormdata({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <Container>
      <section className="contact-body">
        <div className="contact-details">
          <div>
            <h3 className="text-center contact-text">Contact Us</h3>
            <p className="text-center">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>
          </div>
        </div>
        <section className="contact-grid">
          <div className="contact-form">
            <form onSubmit={(e) => submitForm(e)}>
              <div className="d-flex mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-100 mr-4 input-field"
                  value={formData.name}
                  onChange={(e) => change(e)}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Your email"
                  className="w-100 input-field"
                  value={formData.email}
                  onChange={(e) => change(e)}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-100 mb-4 input-field"
                value={formData.subject}
                onChange={(e) => change(e)}
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Your message"
                className="w-100 input-field"
                value={formData.message}
                onChange={(e) => change(e)}
              ></textarea>
              <button type="submit" className="mt-3 mb-5 btn-send">
                SEND
              </button>
            </form>
          </div>
          <div className="contact-information mx-3">
            <div className="">
              <FaMapMarkerAlt />
              <p className="text-center">San Francisco, CA 94126, USA</p>
            </div>
            <div className="">
              <AiTwotonePhone />
              <p className="text-center">+ 01 234 567 89</p>
            </div>
            <div className="">
              <HiMail />
              <p className="text-center">contact@mdbootstrap.com</p>
            </div>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default ContactBody;
