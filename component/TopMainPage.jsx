import { useNextI18n } from "../src/i18n/next-i18n-context";

function TopMainPage({ title, text }) {
  const { t } = useNextI18n();

  return (
    <section id="TopMainPage">
      <h1>{title}</h1>
      <p>{text}</p>
      <h2>{t("components.topMainPage.callUs")}</h2>
      <a href="tel:1-819-237-9813">1-819-237-9813</a>
    </section>
  );
}
export default TopMainPage;
