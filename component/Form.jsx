import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Form() {
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
      alert('Veuillez entrer une adresse email valide');
      return;
    }

    emailjs.sendForm('service_jhcswgq', 'template_u1b0xft', form.current, 'aFJ-p0FX1BN0fju-6')
      .then((result) => {
        console.log(result.text);

        // Nettoyer les champs suite à l'envoi réussi
        form.current.user_name.value = '';
        form.current.user_email.value = '';
        form.current.user_number.value = '';
        form.current.message.value = '';
        form.current.Adresse.value = '';
        form.current.Ville.value = '';

        // Afficher un petit message indiquant que l'e-mail a bien été envoyé
        const sentMessage = document.createElement('div');
        sentMessage.textContent = 'Le message a bien été envoyé !';
        sentMessage.style.color = 'green';
        form.current.appendChild(sentMessage);
        
        setTimeout(() => {
          sentMessage.style.display = 'none';
        }, 5000);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <div className="bar1">
            <div className="name labelInput">
                <label className='labelN' htmlFor='username'>Nom Complet</label>
                <input className='input' type="text" name="user_name" id='username'/>
            </div>
            <div className="numero labelInput">
                <label htmlFor='cellphone'>Téléphone</label>
                <input className='input' id='cellphone' type="text" name="user_number" pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/>
            </div>
        </div>
        <div className="bar2">
            <div className="courriel">
                <label htmlFor='email'>Courriel</label>
                <input className="input" type="email" id='email' name="user_email" />
            </div>
        </div>
        <div className="bar1">
            <div className="adresse labelInput">
                <label htmlFor='adress'>Adresse</label>
                 <input className='input' type="text" id='adress' name="Adresse" />
            </div>
            <div className="ville labelInput">
                <label htmlFor='ville'>Ville</label>
                <input className='input' id='ville' type="text" name="Ville" />
            </div>
        </div>
        <div className="bar1">
            <div className="message">
                <label htmlFor='message'>Message</label>
                <textarea name="message" id='message' placeholder='De quels services avez-vous besoin?'/>
            </div>
        </div>
        <input className="send" type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
export default Form;