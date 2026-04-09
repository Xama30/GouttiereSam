import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Images from "../public/img/Images";
import { useNextI18n } from "../src/i18n/next-i18n-context";

const Animation = dynamic(() => import("../component/Animation"));
const Header = dynamic(() => import("../component/Header"));
const Footer = dynamic(() => import("../component/Footer"));
const Soumission = dynamic(() => import("../component/Soumission"));
const VoirEnDt = dynamic(() => import("../component/VoirEnDt"));
const BoxTxt = dynamic(() => import("../component/BoxTxt"));
const Card = dynamic(() => import("../component/Card"));
const CarteForm = dynamic(() => import("../component/Carte_Form"));

const Index = () => {
  const { t, get } = useNextI18n();
  const citiesLeft = get("nextPages.index.citiesLeft", []);
  const citiesRight = get("nextPages.index.citiesRight", []);
  const servicesItems = get("nextPages.index.servicesItems", []);
  const cards = get("nextPages.index.cards", []);
  const cardImages = [Images.carte1, Images.carte2, Images.carte3];
  const cardSides = ["left", "right", "left"];

  return (
    <div>
      <Head>
        <title key="title">{t("nextPages.index.headTitle")}</title>
        <link
          rel="canonical"
          href="https://entretiensgouttieresrivesud.ca"
          key="canonical"
        />
        <meta
          name="description"
          content={t("nextPages.index.headDescription")}
          key="description"
        />
      </Head>
      <Animation />
      <Header />
      <main>
        <section id="Accueil">
          <Image
            src="/img/home-bg.jpg"
            alt="Nettoyage de gouttieres"
            priority={true}
            width={1200}
            height={600}
            className="accueil__hero-image"
          />
          <div className="accueil__text-container">
            <h1 className="hidden_fade-bottom">
              {t("nextPages.index.heroTitle")}
            </h1>
            <h2 className="hidden_fade-bottom">
              {t("nextPages.index.heroSubtitle")}
            </h2>
            <p className="hidden_fade-bottom">
              {t("nextPages.index.heroWeek")} <br /> 7:30 - 17:00
            </p>
            <p className="hidden_fade-bottom">
              {t("nextPages.index.heroWeekend")} <br /> 9:00 - 17:00
            </p>
            <p className="hidden_fade-bottom">
              {t("nextPages.index.freeQuote")}
            </p>
            <p className="hidden_fade-bottom">{t("nextPages.index.callUs")}</p>
            <p className="hidden_fade-bottom">
              <a href="tel:1-819-237-9813">1-819-237-9813</a>
            </p>
          </div>
        </section>
        <Soumission />
        <section id="section__villes-desservies">
          <h2>{t("nextPages.index.citiesTitle")}</h2>
          <div className="villes__container">
            <ul className="hidden_fade-bottom">
              {citiesLeft.map((city) => (
                <li key={city}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {city}
                </li>
              ))}
            </ul>
            <ul className="hidden_fade-bottom">
              {citiesRight.map((city) => (
                <li key={city}>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="section__services">
          <div className="left">
            <h2 className="hidden_fade-bottom">
              {t("nextPages.index.servicesTitle")}
            </h2>
            <ul>
              {servicesItems.map((item) => (
                <li className="hidden_fade-right" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <VoirEnDt link="/nos-services" />
          </div>
        </section>

        <section id="section__BoxTxt">
          <BoxTxt
            color="G"
            title={t("nextPages.index.whyTitle")}
            texts={get("nextPages.index.whyTexts", [])}
            detail="T"
            classNameBoxTxt="BoxTxt__Accueil"
            route="/pourquoi-entretenir-ses-gouttieres"
          />
          <BoxTxt
            color="L"
            title={t("nextPages.index.whenTitle")}
            texts={get("nextPages.index.whenTexts", [])}
            className="boxTxt_L"
            detail="T"
            classNameBoxTxt="BoxTxt__Accueil"
            route="/quand-nettoyer-ses-gouttieres"
          />
        </section>
        <section id="section__carte">
          {cards.map((card, index) => (
            <Card
              key={`${card.title}-${index}`}
              title={card.title}
              text={card.text}
              image={cardImages[index]}
              alt={card.alt}
              side={cardSides[index] || "left"}
            />
          ))}
        </section>
        <CarteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
