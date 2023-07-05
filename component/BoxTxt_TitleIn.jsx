import VoirEnDt from "./VoirEnDt";

function BoxTxtTitleIn({ color, title, texts, detail, route, className}) {
  const classNameBoxTxt = 'boxTxt__ContainerTitleIn ' + className;
  let boxColor = "";
  let colorLign ="";
  let textColor = "white";
  let display = "";

  let link = route;

  if (route === undefined) {
    link = '';
  }

  if (detail === "T"){
    display = "block";
  } else if(detail === "F"){
    display ="none";
  }

  if (color === "G") {
    boxColor = "#1D593B";
    colorLign = "L"

  } else if (color === "L") {
    boxColor = "#8FBC54";
    colorLign ="G"
  }

  return (
    <div className='box__ContainerTitleIn'>
      <div className={classNameBoxTxt} style={{ backgroundColor: boxColor }}>
        <h2>{title}</h2>
        {texts.map((text, index) => (
          <p key={index} style={{ color: textColor }}>{text}</p>
        ))}
        <VoirEnDt
          display={display}
          link={link}
          color={textColor}
          colorLign={colorLign}/>
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