import Form from "./Form";
import { useNextI18n } from "../src/i18n/next-i18n-context";

function CarteForm() {
  const { t } = useNextI18n();

  return (
    <div className="carteForm">
      <h2>{t("components.carteForm.title")}</h2>
      <h3>{t("components.carteForm.subtitle")}</h3>
      <Form />
    </div>
  );
}
export default CarteForm;
