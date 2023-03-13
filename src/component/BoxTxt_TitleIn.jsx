import "../App.css";
import { Link } from "react-router-dom";

function BoxTxtTitleIn({ color, title, texts, detail, route}) {
  let boxColor = "";
  let textColor = "white";
  let display = "";

  if (detail === "T"){
    display = "block";
  } else if(detail === "F"){
    display ="none";
  }

  if (color === "G") {
    boxColor = "#1D593B";
  } else if (color === "L") {
    boxColor = "#8FBC54";
  }

  return (
    <div className="box__ContainerTitleIn">
      <div className="boxTxt__ContainerTitleIn" style={{ backgroundColor: boxColor }}>
        <h2>{title}</h2>
        {texts.map((text, index) => (
          <p key={index} style={{ color: textColor }}>{text}</p>
        ))}
        <div className="link__ContainerTitleIn">
          <Link to={route} style={{display: display}}>Voir en détails</Link>
        </div>
      </div>
    </div>
  );
}

export default BoxTxtTitleIn;



/* import '../App.css'
function BoxTxt({color, title, text}){
    if(color == 'G'){
        return(
            <div className="box__Container">
                <h2>{title}</h2>
                <div className="boxTxt__Container" style={{backgroundColor: '#1D593B'}}>
                    <p style={{color: 'white'}}>{text}</p>
                </div>    
            </div>
        )
    }
    if(color == 'L'){
        return(
            <div>
                <h2>{title}</h2>
                <div className="boxTxt__Container" style={{backgroundColor: '#8FBC54'}}>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}

export default BoxTxt; */