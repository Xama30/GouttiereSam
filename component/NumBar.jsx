import { useNextI18n } from "../src/i18n/next-i18n-context";

function NumBar() {
  const { t } = useNextI18n();

  return (
    <div className="bar">
      <p>
        {t("components.numBar.prefix")}{" "}
        <a href="tel:1-819-237-9813">1-819-237-9813</a>{" "}
      </p>
    </div>
  );
}
export default NumBar;
