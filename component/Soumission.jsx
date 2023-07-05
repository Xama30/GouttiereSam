import NextLink from 'next/link';

function Soumission() {

  return (
    <div className="Soumission">
      <div className="carte__Soumission">
        <div className="left">
          <h2>Faire une soumission en ligne gratuitement</h2>
          <p>Réponse dans un délai de 24h</p>
        </div>
        <div className="right">
            <NextLink href="/Contactez-Nous">Cliquez ici</NextLink>
        </div>
      </div>
    </div>
  );
}

export default Soumission;