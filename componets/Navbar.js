import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <style jsx>{`
        .mainnav ul {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }

        .mainnav ul li {
          margin: 0 24px;
          list-style: none;
          font-weight: bold;
        }
        @media screen and (max-width: 510px) {
          .mainnav ul li{
            margin: 0 10px;
          }
        }
      `}</style>
      <nav className="mainnav">
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/About">
            <li>About</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
