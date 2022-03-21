import React from 'react';
import { socialMedia } from "src/assets/staticInfo";
import './Footer.scss'

export const Footer: React.FC = () => {
  return (
    <div id="footer">
      <div id="residence">
        <h2>Residence</h2>
        <p>México</p>
      </div>
      <div id="social-networks">
        <h2>Social Networks</h2>
        <ul className="icon-list">
          {socialMedia?.map((e) => (
            <li key={e.id} className="icon-item">
              <a href={e.link} target="_blank" rel="noreferrer">{e.icon}</a>
            </li>
          ))}
        </ul>
      </div>
      <div id="copyright">frajic.com © 2022</div>
    </div>
  );
};
