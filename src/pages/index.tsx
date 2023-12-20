import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Metatags from "../components/Metatags/Metatags";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Experts from "../components/Experts/Experts";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../components/Footer/Footer";
import Separator from "../components/Separator/Separator";
import Accordion from "../components/Accordion/Accordion";
import CoreValues from "../components/CoreValues/CoreValues";
import ScaleProcess from "../components/ScaleProcess/ScaleProcess";
import Contact from "../components/Contact/Contact";
import References from "../components/References/References";
import ReadyWebsite from "../components/ReadyWebsite/ReadyWebsite";

import StrategyFoxPreviewImg from "../assets/images/preview.jpg";

import "./index.css";
import "../assets/scss/style.scss";
import Clients from "../components/Clients/Clients";
import Testimonials from "../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <ScrollToTop>
      <Metatags
        tabTitle="Strategy Fox"
        title="Strategy Fox Business Consulting"
        description="We help our clients succeed by creating brand identities,
        digital transformations and long term growth strategies"
        type="website"
        url={`${process.env.GATSBY_URL}/`}
        image={StrategyFoxPreviewImg}
      />
      <Navbar btnStyle="round" HeaderSTyle="header-not-transparent" />
      <section id="sec-header">
        <Header />
      </section>
      <section id="sec-about">
        <About />
      </section>
      <Separator />
      <section id="sec-services">
        <Services />
      </section>
      <section id="sec-ready-website">
        <ReadyWebsite />
      </section>
      <section id="sec-process">
        <ScaleProcess />
      </section>
      <Separator />
      <section id="sec-clients">
        <Clients />
      </section>
      <Separator />
      <section id="sec-references">
        <References />
      </section>
      <Separator />
      <section id="sec-testimonials">
        <Testimonials />
      </section>
      <Separator />
      <section id="sec-accordion">
        <Accordion />
      </section>
      <Separator />
      <section id="sec-experts">
        <Experts />
      </section>
      <Separator />
      <section id="sec-corevalues">
        <CoreValues />
      </section>
      <Separator />
      <section id="sec-contact">
        <Contact />
      </section>
      <Footer />
    </ScrollToTop>
  );
};

export default HomePage;
