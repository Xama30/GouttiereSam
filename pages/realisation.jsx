import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import {
  longueuilBefore,
  longueuilAfter,
  brossardBefore,
  brossardAfter,
  bouchervilleBefore,
  bouchervilleAfter,
  saintBrunoBefore,
  saintBrunoAfter,
  candiacBefore,
  candiacAfter,
  saintLambertBefore,
  saintLambertAfter,
  laPrairieBefore,
  laPrairieAfter,
  chamblyBefore,
  chamblyAfter,
  sainteJulieBefore,
  sainteJulieAfter,
  beloeilBefore,
  beloeilAfter,
} from "../public/img/Slider";

const Header = dynamic(() => import("../component/Header"));
const Footer = dynamic(() => import("../component/Footer"));
const BeforeAfterSlider = dynamic(
  () => import("../component/BeforeAfterSlider"),
);
const NumBar = dynamic(() => import("../component/NumBar"));

function Realisation() {
  const { t, get, lang } = useNextI18n();
  const isEnglish = lang === "en";
  const canonicalPath = isEnglish ? "/projects" : "/realisation";

  const sliderPairs = [
    { beforeImage: longueuilBefore.src, afterImage: longueuilAfter.src },
    { beforeImage: brossardBefore.src, afterImage: brossardAfter.src },
    { beforeImage: bouchervilleBefore.src, afterImage: bouchervilleAfter.src },
    { beforeImage: saintBrunoBefore.src, afterImage: saintBrunoAfter.src },
    { beforeImage: candiacBefore.src, afterImage: candiacAfter.src },
    { beforeImage: saintLambertBefore.src, afterImage: saintLambertAfter.src },
    { beforeImage: laPrairieBefore.src, afterImage: laPrairieAfter.src },
    { beforeImage: chamblyBefore.src, afterImage: chamblyAfter.src },
    { beforeImage: sainteJulieBefore.src, afterImage: sainteJulieAfter.src },
    { beforeImage: beloeilBefore.src, afterImage: beloeilAfter.src },
  ];

  const localizedItems = get("nextPages.realisation.items", []);
  const projects = Array.isArray(localizedItems)
    ? localizedItems.slice(0, sliderPairs.length)
    : [];

  const beforeLabel = isEnglish ? "Before" : "Avant";
  const afterLabel = isEnglish ? "After" : "Après";

  return (
    <div>
      <Head>
        <title key="title">{t("nextPages.realisation.headTitle")}</title>
        <link
          rel="canonical"
          href={`https://entretiensgouttieresrivesud.ca${canonicalPath}`}
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
