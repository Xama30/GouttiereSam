import { Link } from "react-router-dom";

function CardInfo({title, text}){
    return(
        <div className="card__Info">
            <div className="text__Info">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="detail__Info">
                <Link>Voir en détail</Link>
            </div>
        </div>
    );
}
export default CardInfo;