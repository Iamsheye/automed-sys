import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactBody from "../components/ContactBody";

const Contact: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Website's Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Header />
        <ContactBody/>
        <Footer />
      </section>
    </section>
  );
};

export default Contact;
