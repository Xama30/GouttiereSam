import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import {
  avant1,
  avant2,
  avant3,
  avant4,
  avant5,
  avant6,
  apres1,
  apres2,
  apres3,
  apres4,
  apres5,
  apres6,
} from "../public/img/Slider";

const Header = dynamic(() => import("../component/Header"));
const Footer = dynamic(() => import("../component/Footer"));
const BeforeAfterSlider = dynamic(
  () => import("../component/BeforeAfterSlider"),
);
const NumBar = dynamic(() => import("../component/NumBar"));

function Realisation() {
  const { t, get } = useNextI18n();
  const router = useRouter();

  const sliderPairs = [
    { beforeImage: avant1.src, afterImage: apres1.src },
    { beforeImage: avant2.src, afterImage: apres2.src },
    { beforeImage: avant3.src, afterImage: apres3.src },
    { beforeImage: avant4.src, afterImage: apres4.src },
    { beforeImage: avant5.src, afterImage: apres5.src },
    { beforeImage: avant6.src, afterImage: apres6.src },
  ];

  const localizedItems = get("nextPages.realisation.items", []);
  const projects = Array.isArray(localizedItems)
    ? localizedItems.slice(0, sliderPairs.length)
    : [];

  const beforeLabel = router.locale === "en" ? "Before" : "Avant";
  const afterLabel = router.locale === "en" ? "After" : "Après";

  return (
    <div>
      <Head>
        <title key="title">{t("nextPages.realisation.headTitle")}</title>
        <link
          rel="canonical"
          href="https://entretiensgouttieresrivesud.ca/Realisation"
          key="canonical"
        />
        <meta
          name="description"
          content={t("nextPages.realisation.headDescription")}
          key="description"
        />
      </Head>
      <Header />
      <section id="P2" className="Top__ContactUs">
        <h2>{t("nextPages.realisation.heading")}</h2>
        <p>{t("nextPages.realisation.lead")}</p>
      </section>
      <NumBar />
      <section id="Realisation">
        <div className="works">
          {projects.map((item, index) => {
            const pair = sliderPairs[index];

            return (
              <article
                className="realisation-item"
                key={`${item.city}-${index}`}
              >
                <BeforeAfterSlider
                  beforeImage={pair.beforeImage}
                  afterImage={pair.afterImage}
                  beforeAlt={item.alt_before}
                  afterAlt={item.alt_after}
                  beforeLabel={beforeLabel}
                  afterLabel={afterLabel}
                />
                <div className="realisation-item__content">
                  <span className="realisation-item__city">{item.city}</span>
                  <h3 className="realisation-item__title">{item.title}</h3>
                  <p className="realisation-item__description">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Realisation;
