import '../App.css';

function Card({image, title, text, side}){
   
    if (side == 'left'){
        return(
            <div className='card' style={{borderRight: 'solid 3px #8FBC54'}}>
                <img src={image} alt="image" />
                <div className="card__Txt__C">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div> 
        )
    }
    if (side == 'right'){
        return(
            <div className='card' style={{borderLeft: 'solid 3px #8FBC54'}}>
                <div className="card__Txt__C">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <img src={image} alt="image" />
            </div> 
        )
    }
}

export default Card;