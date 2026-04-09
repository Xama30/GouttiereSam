import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNextI18n } from "../src/i18n/next-i18n-context";

function Form() {
  const { t } = useNextI18n();

  const form = useRef();

  // fonction de validation de l'email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Récupérer la valeur de l'e-mail et du numéro de téléphone
    const userEmail = form.current.user_email.value.trim();

    // valider l'email avant l'envoi
    if (!validateEmail(userEmail)) {
      alert(t("components.form.invalidEmail"));
      return;
    }

    emailjs
      .sendForm(
        "service_jhcswgq",
        "template_u1b0xft",
        form.current,
        "aFJ-p0FX1BN0fju-6",
      )
      .then(
        (result) => {
          // Nettoyer les champs suite à l'envoi réussi
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.user_number.value = "";
          form.current.message.value = "";
          form.current.Adresse.value = "";
          form.current.Ville.value = "";

          // Afficher un petit message indiquant que l'e-mail a bien été envoyé
          const sentMessage = document.createElement("div");
          sentMessage.textContent = t("components.form.sent");
          sentMessage.style.color = "green";
          form.current.appendChild(sentMessage);

          setTimeout(() => {
            sentMessage.style.display = "none";
          }, 5000);
        },
        (error) => {},
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <div className="bar1">
          <div className="name labelInput">
            <label className="labelN" htmlFor="username">
              {t("components.form.fullName")}
            </label>
            <input
              className="input"
              type="text"
              name="user_name"
              id="username"
            />
          </div>
          <div className="numero labelInput">
            <label htmlFor="cellphone">{t("components.form.phone")}</label>
            <input
              className="input"
              id="cellphone"
              type="text"
              name="user_number"
              pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
            />
          </div>
        </div>
        <div className="bar2">
          <div className="courriel">
            <label htmlFor="email">{t("components.form.email")}</label>
            <input
              className="input"
              type="email"
              id="email"
              name="user_email"
            />
          </div>
        </div>
        <div className="bar1">
          <div className="adresse labelInput">
            <label htmlFor="adress">{t("components.form.address")}</label>
            <input className="input" type="text" id="adress" name="Adresse" />
          </div>
          <div className="ville labelInput">
            <label htmlFor="ville">{t("components.form.city")}</label>
            <input className="input" id="ville" type="text" name="Ville" />
          </div>
        </div>
        <div className="bar1">
          <div className="message">
            <label htmlFor="message">{t("components.form.message")}</label>
            <textarea
              name="message"
              id="message"
              placeholder={t("components.form.placeholder")}
            />
          </div>
        </div>
        <input
          className="send"
          type="submit"
          value={t("components.form.submit")}
        />
      </form>
    </div>
  );
}
export default Form;
