import NextLink from "next/link";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import { getLocalizedPath } from "../src/i18n/next-routes";

function Soumission() {
  const { t, lang } = useNextI18n();
  const contactHref = getLocalizedPath(lang, "contact");

  return (
    <div className="Soumission">
      <div className="carte__Soumission">
        <div className="left">
          <h2>{t("components.soumission.title")}</h2>
          <p>{t("components.soumission.subtitle")}</p>
        </div>
        <div className="right">
          <NextLink href={contactHref}>
            {t("components.soumission.cta")}
          </NextLink>
        </div>
      </div>
    </div>
  );
}

export default Soumission;
