import Animation from '../component/Animation';
import Image from 'next/image'

function Card({image, title, text, side, alt}){
   
    if (side === 'left'){
        return(
            <div className='card hidden_fade-bottom' style={{borderRight: 'solid 3px #8FBC54'}}>
                <Animation />
                <div className="card__img__C">
                    <Image
                        src={image}
                        alt={alt}
                    />
                </div>
                <div className="card__Txt__C">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div> 
        )
    }
    if (side === 'right'){
        return(
            <div className='card hidden_fade-bottom' style={{borderLeft: 'solid 3px #8FBC54'}}>
                <Animation />
                <div className="card__Txt__C">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="card__img__C">
                    <Image
                        src={image}
                        alt={alt}
                    />
                </div>
            </div> 
        )
    }
}

export default Card;