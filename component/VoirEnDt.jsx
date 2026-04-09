import NextLink from "next/link";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useNextI18n } from "../src/i18n/next-i18n-context";
import { getLocalizedPath } from "../src/i18n/next-routes";
library.add(faArrowRightLong);

function VoirEnDt({ display, link, color, colorLign, label }) {
  const { t, lang } = useNextI18n();
  const ctaLabel = label || t("components.voirEnDt.defaultLabel");
  const localizedHref = getLocalizedPath(lang, link);

  return (
    <div className="BT__VoirDetail">
      <NextLink
        className={colorLign}
        style={{ color: color, display: display }}
        href={localizedHref}
      >
        <span>{ctaLabel}</span>
        <FontAwesomeIcon icon={faArrowRightLong} />
      </NextLink>
    </div>
  );
}
export default VoirEnDt;
