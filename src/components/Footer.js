import React from "react";
import "../styles/components/Footer.css";
import { Link } from "react-router-dom";
import Github_logo from "../resources/Github_logo.svg";
import Twitter_logo from "../resources/Twitter_logo.svg";
import LinkedIn_logo from "../resources/LinkedIn_logo.svg";

function Footer() {
  return (
    <footer className="footer_base">
      <div className="footer_links_to_contact">
        <div>Email</div>
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
        <Link to="/" className="footer_link_tag">
          @himanshusandha
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
