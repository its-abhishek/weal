import react from "react";
import "../../src/home.css";
import { Link } from "react-router-dom";

import insta from "../assets/insta.png";
import gmail from "../assets/gmail1.png";
import cover from "../assets/cover.png";


function Home() {
  return (
    <div className="container">
      <p className="first-tag">REACH OUT TO US</p>
      <p className="second-tag">We are here to help.</p>
      <a href="https://www.instagram.com/weal_pesu/">
        <img src={insta} alt="" className="insta-logo" />
        <p className="insta-id">weal_pesu</p>
      </a>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHwQbPMdRWcLFwgftTvJmDzjMNLhrhrLfMLhtWgsTcKvWZqXmNFnBzTTcngCHCvtPcvjDNs">
        <img src={gmail} alt="" className="mail-logo" />
        <p className="mail-id">weal@pes.edu</p>
      </a>
      <img src={cover} alt="coverpage" className="cover-page" />
    </div>
  );
}

export default Home;