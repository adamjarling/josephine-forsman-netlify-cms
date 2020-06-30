import React from "react";
import { Link } from "gatsby";

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="https://www.saharahotnights.com/">Sahara Hotnights</a>
              </li>
              <li>
                <a href="https://www.loudprogramsweden.com/">
                  Loud Program Sweden
                </a>
              </li>
            </ul>
            <a
              className="close"
              onClick={(e) => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {""}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
