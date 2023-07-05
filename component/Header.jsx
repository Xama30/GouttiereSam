import React, { useState } from 'react';
import logo from '../public/logo.webp';
import Image from 'next/image';
import NextLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    document.querySelector('.menu-hamburger').classList.toggle('is-open');
    document.querySelector('.mobile-menu').classList.toggle('is-open');
  };

  const mobileDropdown = () => {
    const dropdownItems = document.querySelectorAll('.dropdown-items');
    dropdownItems.forEach(item => {
      item.classList.toggle('is-open');
    });
    setIsOpen(!isOpen);
  };

  return (
    <header id="top">
      <div className="logo">
        <NextLink href="/">
          <Image
            src={logo}
            alt="logo de Gouttière Rive-Sud"
            placeholder='blur'
            
          />
        </NextLink>
      </div>
      <div className="list-menu">
        <ul className="menu">
          <li>
            <NextLink href="/">Accueil</NextLink>
          </li>
          <li>
            <NextLink href="/Nos-Services">Services</NextLink>
          </li>
          <li>
            <NextLink href="/Realisation">Réalisation</NextLink>
          </li>
          <li>
            Informations
            <div className="dropdown">
              <ul className="dropdown__liste">
                <li>
                  <NextLink href="/Tout-savoir-sur-les-gouttieres">Gouttières</NextLink>
                </li>
                <li>
                  <NextLink href="/Tout-savoir-sur-les-pare-feuilles">Pare-feuilles</NextLink>
                </li>
                <li>
                  <NextLink href="/Quand-nettoyer-ses-gouttieres">Quand?</NextLink>
                </li>
                <li>
                  <NextLink href="/Pourquoi-entretenir-ses-gouttieres">Pourquoi?</NextLink>
                </li>
                <li>
                  <NextLink href="/Comment-nettoyer-ses-gouttieres">Comment?</NextLink>
                </li>
                <li>
                  <NextLink href="/Gestion-de-vos-gouttieres">Guide Complet</NextLink>
                </li>
                <li>
                  <NextLink href="/FAQ">FAQ</NextLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NextLink href="/Contactez-nous">Contactez-Nous</NextLink>
          </li>
        </ul>
      </div>
      <div className="menu-hamburger" onClick={toggleMenu}>
        <div className="bars bar-1"></div>
        <div className="bars bar-2"></div>
        <div className="bars bar-3"></div>
      </div>
      <div className="mobile-menu">
        <ul className="menu">
          <li>
            <NextLink href="/">Accueil</NextLink>
          </li>
          <li>
            <NextLink href="/Nos-Services">Services</NextLink>
          </li>
          <li>
            <NextLink href="/Realisation">Réalisation</NextLink>
          </li>
          <li className="row">
            Informations
            <div className="arrow-dropdown" onClick={mobileDropdown}>
              <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
            </div>
          </li>
          <li className="dropdown-items">
            <NextLink href="/Tout-savoir-sur-les-gouttieres">Gouttières</NextLink>
          </li>
          <li className="dropdown-items">
            <NextLink href="/Tout-savoir-sur-les-pare-feuilles">Pare-feuilles</NextLink>
          </li>
          <li className="dropdown-items">
            <NextLink href="/Quand-nettoyer-ses-gouttieres">Quand?</NextLink>
          </li>
          <li className="dropdown-items">
            <NextLink href="/pourquoi-entretenir-ses-gouttieres">Pourquoi?</NextLink>
          </li>
          <li className="dropdown-items">
            <NextLink href="/Comment-nettoyer-ses-gouttieres">Comment?</NextLink>
          </li>
          <li className="dropdown-items">
            <NextLink href="/Gestion-de-vos-gouttieres">Guide Complet</NextLink>
          </li>
          <li className="dropdown-items">
            <NextLink href="/FAQ">FAQ</NextLink>
          </li>
          <li>
            <NextLink href="/Contactez-nous">Contactez-Nous</NextLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
