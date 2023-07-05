import VoirEnDt from "./VoirEnDt";
import Animation from '../component/Animation';

function BoxTxt({ color, title, texts, className, route, detail}) {
  const classNameBoxTxt = 'box__Container ' + className;
  let link = route;

  let colorLign = ""
  let boxColor = "";
  let textColor;
  let display = "";

  if (detail === "T"){
    display = "block";
  } else if(detail === "F"){
    display = "none";
  }

  if (color === "G") {
    boxColor = "#1D593B";
    colorLign = "L";
    textColor = "white";
  } else if (color === "L") {
    boxColor = "#8FBC54";
    colorLign = "G"
    textColor = "black";
  }

  if (route === undefined) {
    link = '';
  }

  return (
        <div className={classNameBoxTxt}>
          <Animation />
          <h2 className="hidden_fade-right">{title}</h2>
          <div className="boxTxt__Container" style={{ backgroundColor: boxColor }}>
            {texts.map((text, index) => (
              <p key={index} style={{ color: textColor }} className="hidden_fade-bottom">{text}</p>
            ))}
            <VoirEnDt
              display={display}
              link={link}
              color={textColor}
              colorLign={colorLign}
            />
          </div>
        </div>
  );
}

export default BoxTxt;



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