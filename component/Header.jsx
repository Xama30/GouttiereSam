import React, { useEffect, useRef, useState } from "react";
import logo from "../public/logo.webp";
import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/compat/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import { getLocalizedPath } from "../src/i18n/next-routes";

function Header() {
  const router = useRouter();
  const [isDesktopInfoOpen, setIsDesktopInfoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileInfoOpen, setIsMobileInfoOpen] = useState(false);
  const { t, lang, get } = useNextI18n();
  const desktopCloseTimeoutRef = useRef(null);

  const asPath =
    router?.asPath ??
    (typeof window !== "undefined" ? window.location.pathname : "/");
  const rawPath = asPath.split("?")[0].split("#")[0];
  const normalizedPath =
    rawPath === "/en" ? "/" : rawPath.replace(/^\/en(?=\/|$)/, "") || "/";

  const languageTargets = {
    fr: getLocalizedPath("fr", normalizedPath),
    en: getLocalizedPath("en", normalizedPath),
  };

  const homeHref = getLocalizedPath(lang, "home");
  const servicesHref = getLocalizedPath(lang, "services");
  const projectsHref = getLocalizedPath(lang, "portfolio");
  const contactHref = getLocalizedPath(lang, "contact");
  const faqHref = getLocalizedPath(lang, "faq");

  const infoLinkDefs =
    lang === "en"
      ? [
          { href: "/gutter-types", key: "gutterTypes" },
          { href: "/when-to-clean-gutters", key: "whenToClean" },
          { href: "/why-maintain-gutters", key: "whyMaintain" },
          { href: "/how-to-clean-gutters", key: "howToClean" },
          { href: "/gutter-maintenance-guide", key: "fullGuide" },
          { href: faqHref, key: "faq" },
        ]
      : [
          { href: "/tout-savoir-sur-les-gouttieres", key: "gutterTypes" },
          { href: "/tout-savoir-sur-les-pare-feuilles", key: "leafGuards" },
          { href: "/quand-nettoyer-ses-gouttieres", key: "whenToClean" },
          { href: "/pourquoi-entretenir-ses-gouttieres", key: "whyMaintain" },
          { href: "/comment-nettoyer-ses-gouttieres", key: "howToClean" },
          { href: "/gestion-de-vos-gouttieres", key: "fullGuide" },
          { href: faqHref, key: "faq" },
        ];

  const infoLinks = infoLinkDefs.map((link) => ({
    href: link.href,
    label: t(`header.infoLinks.${link.key}`),
  }));

  const cityPages = get("header.cityPages", []).filter(
    (city) => city?.href && city?.label,
  );
  const citiesLead = t("header.mega.citiesLead");

  const clearDesktopCloseTimeout = () => {
    if (desktopCloseTimeoutRef.current) {
      clearTimeout(desktopCloseTimeoutRef.current);
      desktopCloseTimeoutRef.current = null;
    }
  };

  const openDesktopInfoMenu = () => {
    clearDesktopCloseTimeout();
    setIsDesktopInfoOpen(true);
  };

  const closeDesktopInfoMenu = () => {
    clearDesktopCloseTimeout();
    desktopCloseTimeoutRef.current = setTimeout(() => {
      setIsDesktopInfoOpen(false);
    }, 320);
  };

  useEffect(() => {
    return () => {
      clearDesktopCloseTimeout();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleResize = () => {
      if (window.innerWidth > 950) {
        setIsMobileMenuOpen(false);
        setIsMobileInfoOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const className = "mobile-menu-open";
    document.documentElement.classList.toggle(className, isMobileMenuOpen);
    document.body.classList.toggle(className, isMobileMenuOpen);

    return () => {
      document.documentElement.classList.remove(className);
      document.body.classList.remove(className);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileInfoOpen(false);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      if (!next) {
        setIsMobileInfoOpen(false);
      }

      return next;
    });
  };

  const mobileDropdown = () => {
    setIsMobileInfoOpen((prev) => !prev);
  };

  const mobileDropdownClass = isMobileInfoOpen
    ? "dropdown-items is-open"
    : "dropdown-items";

  const normalizeCityHref = (href) => {
    if (typeof href !== "string") {
      return "/";
    }

    return href.replace(/^\/en(?=\/|$)/, "") || "/";
  };

  return (
    <header id="top">
      <div className="logo">
        <NextLink href={homeHref}>
          <Image src={logo} alt={t("header.logoAlt")} placeholder="blur" />
        </NextLink>
      </div>
      <div className="list-menu">
        <ul className="menu">
          <li>
            <NextLink href={homeHref}>{t("header.nav.home")}</NextLink>
          </li>
          <li>
            <NextLink href={servicesHref}>{t("header.nav.services")}</NextLink>
          </li>
          <li>
            <NextLink href={projectsHref}>{t("header.nav.projects")}</NextLink>
          </li>
          <li
            className={`menu-item-information ${isDesktopInfoOpen ? "is-open" : ""}`}
            onMouseEnter={openDesktopInfoMenu}
            onMouseLeave={closeDesktopInfoMenu}
          >
            <span className="menu-item-label">
              {t("header.nav.information")}
            </span>
            <div
              className={`dropdown dropdown--mega ${isDesktopInfoOpen ? "is-open" : ""}`}
              onMouseEnter={openDesktopInfoMenu}
              onMouseLeave={closeDesktopInfoMenu}
            >
              <div className="dropdown__inner">
                <div className="dropdown__column">
                  <h3>{t("header.mega.resourcesTitle")}</h3>
                  <ul className="dropdown__liste">
                    {infoLinks.map((link) => (
                      <li key={link.href}>
                        <NextLink href={link.href}>{link.label}</NextLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dropdown__column">
                  <h3>{t("header.mega.citiesTitle")}</h3>
                  {citiesLead ? <p>{citiesLead}</p> : null}
                  <ul className="dropdown__liste dropdown__liste--cities">
                    {cityPages.map((city) => (
                      <li key={city.key || city.label}>
                        <NextLink
                          href={getLocalizedPath(
                            lang,
                            normalizeCityHref(city.href),
                          )}
                        >
                          {city.label}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <NextLink href={contactHref}>{t("header.nav.contact")}</NextLink>
          </li>
          <li className="lang-toggle">
            <NextLink
              href={languageTargets.fr}
              className={lang !== "en" ? "lang-current" : ""}
            >
              {t("header.language.fr")}
            </NextLink>
            <span>/</span>
            <NextLink
              href={languageTargets.en}
              className={lang === "en" ? "lang-current" : ""}
            >
              {t("header.language.en")}
            </NextLink>
          </li>
        </ul>
      </div>
      <div
        className={`menu-hamburger ${isMobileMenuOpen ? "is-open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bars bar-1"></div>
        <div className="bars bar-2"></div>
        <div className="bars bar-3"></div>
      </div>
      <div
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? "is-open" : ""}`}
        onClick={closeMobileMenu}
      ></div>
      <div className={`mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}>
        <ul className="menu">
          <li>
            <NextLink href={homeHref} onClick={closeMobileMenu}>
              {t("header.nav.home")}
            </NextLink>
          </li>
          <li>
            <NextLink href={servicesHref} onClick={closeMobileMenu}>
              {t("header.nav.services")}
            </NextLink>
          </li>
          <li>
            <NextLink href={projectsHref} onClick={closeMobileMenu}>
              {t("header.nav.projects")}
            </NextLink>
          </li>
          <li className="row">
            {t("header.nav.information")}
            <div className="arrow-dropdown" onClick={mobileDropdown}>
              <FontAwesomeIcon
                icon={isMobileInfoOpen ? faChevronUp : faChevronDown}
              />
            </div>
          </li>
          <li className={`${mobileDropdownClass} dropdown-group-title`}>
            {t("header.mega.resourcesTitle")}
          </li>
          {infoLinks.map((link) => (
            <li className={mobileDropdownClass} key={link.href}>
              <NextLink href={link.href} onClick={closeMobileMenu}>
                {link.label}
              </NextLink>
            </li>
          ))}
          <li className={`${mobileDropdownClass} dropdown-group-title`}>
            {t("header.mega.citiesTitle")}
          </li>
          {cityPages.map((city) => (
            <li className={mobileDropdownClass} key={city.key || city.label}>
              <NextLink
                href={getLocalizedPath(lang, normalizeCityHref(city.href))}
                onClick={closeMobileMenu}
              >
                {city.label}
              </NextLink>
            </li>
          ))}
          <li>
            <NextLink href={contactHref} onClick={closeMobileMenu}>
              {t("header.nav.contact")}
            </NextLink>
          </li>
          <li className="lang-toggle">
            <NextLink
              href={languageTargets.fr}
              className={lang !== "en" ? "lang-current" : ""}
              onClick={closeMobileMenu}
            >
              {t("header.language.fr")}
            </NextLink>
            <span>/</span>
            <NextLink
              href={languageTargets.en}
              className={lang === "en" ? "lang-current" : ""}
              onClick={closeMobileMenu}
            >
              {t("header.language.en")}
            </NextLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
