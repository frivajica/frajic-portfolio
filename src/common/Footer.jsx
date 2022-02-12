import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="residence">
        <h2>Residence</h2>
        <p>Merida, Yucatán, México</p>
      </div>
      <div id="social-networks">
        <h2>Social Networks</h2>
        <ul className="icon-list">
          <li className="icon-item">
            <a href="https://www.instagram.com/frivajica/">
              <FaInstagram size={25} />
            </a>
          </li>
          <li className="icon-item">
            <a href="https://github.com/frivajica">
              <FaGithub className="icon" size={25} />
            </a>
          </li>
          <li className="icon-item">
            <a href="https://www.linkedin.com/in/franjimenezc/">
              <FaLinkedinIn className="icon" size={25} />
            </a>
          </li>
        </ul>
      </div>
      <div id="copyright">frajic.com © 2022</div>
    </div>
  );
};
