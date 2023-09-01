import React from "react";
import styled from "./Footer.module.css";
import { HashLink as Link } from "react-router-hash-link";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styled.footer__container}>
      <Container className={styled.footer}>
        <ul className={styled.footer__links}>
          <Heading className="small--dark" heading="Links" />
          <li>
            <Link smooth to="#home">
              Inicio
            </Link>
          </li>

          <li>
            <Link smooth to="#about">
              Acerca de
            </Link>
          </li>

          <li>
            <Link smooth to="#programs">
              Programas
            </Link>
          </li>

          <li>
            <Link smooth to="#facilities">
              Instalaciones
            </Link>
          </li>

          <li>
            <Link smooth to="#locations">
              Locales
            </Link>
          </li>
        </ul>
        <article>
          <Heading className="small--dark" heading="Contactanos" />
          <ul className={styled.footer__contact}>
            <div className={styled["footer__contact--info"]}>
              <h3>Email</h3>
              <li>
                <p>Maddison Garden</p>
                <p>gymnatura@gmail.com</p>
              </li>

              <li>
                <p>Blairgrove</p>
                <p>gymnaturablairgrove@gmail.com</p>
              </li>
            </div>

            <div className={styled["footer__contact--info"]}>
              <h3>teléfonos</h3>
              <li>
                <p>Maddison Garden</p>
                <p>1-547-697-9236</p>
              </li>

              <li>
                <p>Blairgrove</p>
                <p>1-250-520-4256</p>
              </li>
            </div>
          </ul>
        </article>

        <div className={styled.footer__icons}>
          <Heading className="small--dark" heading="Redes Sociales" />
          <div className={styled["footer__icons--icons"]}>
            <FaInstagramSquare size={35} color="var(--secondary)" />
            <FaFacebookSquare size={35} color="var(--secondary)" />
            <FaTwitterSquare size={35} color="var(--secondary)" />
          </div>
        </div>
      </Container>

      <ul className={styled.footer__logo}>
        <Heading className="small" heading="natura" />
        <li>
          <a
            target="_blank"
            href=""
            rel="noreferrer"
          >
            Designed & Developed by Damian
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
