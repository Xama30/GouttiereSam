import { Link } from "react-router-dom";

function BorderTitle({title, text, detail, link}){
    let display = "";

    if (detail === "T"){
        display="block";
    } else if (detail === "F"){
        display="none";
    }

    return(
        <div className="BT__ContainerM">
            <div className="BT__Container">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="BT__VoirDetail">
                <Link style={{display: display}} to={link}>Voir en détails</Link>
            </div>
        </div>
    )
}

export default BorderTitle;