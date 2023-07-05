import VoirEnDt from "./VoirEnDt";

function CardInfo({title, text, route}){

    let link = route;

    if (route === undefined) {
      link = '';
    }

    return(
        <div className="card__Info">
            <div className="text__Info">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="detail__Info">
                <VoirEnDt
                link={link}/>
            </div>
        </div>
    );
}
export default CardInfo;