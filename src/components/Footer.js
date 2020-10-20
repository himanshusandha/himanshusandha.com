import React from "react";
import "../styles/components/Footer.css";
import { Link } from "react-router-dom";
import Github_logo from "../resources/Github_logo.svg";
import Twitter_logo from "../resources/Twitter_logo.svg";
import LinkedIn_logo from "../resources/LinkedIn_logo.svg";

function Footer() {
  const scrollToTop = () => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="footer_base">
      <div className="footer_links_to_contact">
        <a
          href="mailto:himanshujsandha@gmail.com"
          className="footer_link_tag footer_link_email"
        >
          Email
        </a>
        <a
          href="https://github.com/himanshusandha"
          target="_blank"
          rel="noopener noreferrer"
          className="footer_link_tag"
        >
          <img src={Github_logo} alt="Github" />
        </a>
        <a
          href="https://twitter.com/himanshusandha"
          target="_blank"
          rel="noopener noreferrer"
          className="footer_link_tag"
        >
          <img src={Twitter_logo} alt="Twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/himanshu-sandha-839819154"
          target="_blank"
          rel="noopener noreferrer"
          className="footer_link_tag"
        >
          <img src={LinkedIn_logo} alt="LinkedIn" />
        </a>
      </div>
      <div>
        Copyright © 2020{" "}
        <Link to="/" onClick={scrollToTop} className="footer_link_tag">
          @himanshusandha
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
