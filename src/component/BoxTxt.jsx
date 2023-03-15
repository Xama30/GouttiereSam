import "../App.css";

function BoxTxt({ color, title, texts }) {
  let boxColor = "";
  let textColor = "white";

  if (color === "G") {
    boxColor = "#1D593B";
  } else if (color === "L") {
    boxColor = "#8FBC54";
  }

  return (
    <div className="box__Container">
      <h2>{title}</h2>
      <div className="boxTxt__Container" style={{ backgroundColor: boxColor }}>
        {texts.map((text, index) => (
          <p key={index} style={{ color: textColor }}>{text}</p>
        ))}
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