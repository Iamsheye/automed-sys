import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBody from "../components/AboutBody";

const About: NextPage = () => {
  return (
    <section>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Website's About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Header />
        <AboutBody />
        <Footer />
      </section>
    </section>
  );
};

export default About;
