import logo from "../public/logo.webp";
import Image from "next/image";
import { useNextI18n } from "../src/i18n/next-i18n-context";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook);

function Footer() {
  const { t } = useNextI18n();

  return (
    <footer>
      <div className="logo--footer">
        <Image
          src={logo}
          alt={t("components.footer.logoAlt")}
          placeholder="blur"
        />
      </div>
      <div className="containerText">
        <div className="info info1">
          <div className="adresse">
            <h3>{t("components.footer.addressTitle")}</h3>
            <p>{t("components.footer.addressLine1")}</p>
            <p>{t("components.footer.postalCode")}</p>
          </div>
          <div className="heures">
            <h3>{t("components.footer.hoursTitle")}</h3>
            <p>{t("components.footer.weekdays")}</p>
            <p>{t("components.footer.weekdayHours")}</p>
            <p>{t("components.footer.weekends")}</p>
            <p>{t("components.footer.weekendHours")}</p>
          </div>
        </div>
        <div className="info info2">
          <div className="adresse">
            <h3>{t("components.footer.phoneTitle")}</h3>
            <a href="tel:1-819-237-9813">1-819-237-9813</a>
          </div>
          <div className="heures">
            <h3>{t("components.footer.emailTitle")}</h3>
            <a href="mailto:entretiensgrondin@hotmail.com">
              entretiensgrondin@hotmail.com
            </a>
          </div>
          <div className="facebook">
            <h3>{t("components.footer.socialTitle")}</h3>
            <a
              href="https://www.facebook.com/profile.php?id=100072122260397"
              aria-label={t("components.footer.facebookAria")}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
