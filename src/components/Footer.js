import React from "react";
import config from "../../config";

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="copyright">
        <li>&copy; Josephine Forsman 2020</li>
        <li>
          Design: Adam J. Arling and <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
