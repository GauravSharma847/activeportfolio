import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import img from '../assets/gsharma.jpg'

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={img}
          alt="Founder"
        />

        <h2>Gaurav Sharma</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://linkedin.com/in/gaurav8417" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/GauravSharma847" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;