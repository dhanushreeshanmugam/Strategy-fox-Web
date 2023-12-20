import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Metatags from "../components/Metatags/Metatags";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../components/Footer/Footer";
import Blog from "../components/Blog/Blog";
import StrategyFoxPreviewImg from "../assets/images/preview.jpg";

import "./index.css";
import "../assets/scss/style.scss";

const data = {
  title: "Privacy Policy",
  author: "Pradeep Kumar",
  date: "01/03/2022",
  body: [
    `<div class='custom-heading'>What type of information we collect: </div> We receive and store information you enter on our website or provide us in any other way (including name, email, comments). We may use software tools to measure and collect session information, including page response times, length of visits to certain pages, page interaction information, and methods used to browse away from the page.<br/><br/>`,
    `<div class='custom-heading'>Why we collect information: </div> We collect such non-personal and personal information for the following purposes: <br/> ​To be able to contact our visitors with general or personalized service-related notices and promotional messages;
  To create aggregated statistical data and other aggregated and/or inferred non-personal information, which we or our business partners may use to provide and improve our respective services;<br/><br/>`,
    `<div class='custom-heading'>How we store and process information: </div> Our company is hosted on the Cloudflare platform. Cloudflare provides us with the online platform that allows us to sell our services to you. They store your data on secure servers behind a firewall. <br/> <br/>We may contact you to poll your opinions through surveys or questionnaires, to send updates about our company and services, or as otherwise necessary to contact you to enforce our User Agreement, applicable national laws, and any agreement we may have with you. For these purposes we may contact you via email, telephone and text messages.<br/><br/>`,
    `<div class='custom-heading'>Contacting us about your information: </div> If you would like to access, correct, amend or delete any personal information we have about you, or withdraw your consent to our use of your information, you are invited to contact us at <a href="mailto:info.foxbusinessconsulting@gmail.com">info.foxbusinessconsulting@gmail.com</a><br/><br/>`,
    `<div class='custom-heading'>Privacy Policy updates: </div> We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.`,
  ],
};

const HomePage = () => {
  return (
    <ScrollToTop>
      <Metatags
        title="Strategy Fox | Privacy Policy"
        description=" We receive and store information you enter on our website or provide us in any other way (including name, email, comments)..."
        type="article"
        url={`${process.env.GATSBY_URL}/privacy-policy`}
        image={StrategyFoxPreviewImg}
      />
      <Navbar btnStyle="round" HeaderSTyle="header-not-transparent" />
      <Blog data={data} />
      <Footer />
    </ScrollToTop>
  );
};

export default HomePage;
