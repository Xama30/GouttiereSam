import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Icon_H3_P({icon, title, text, text2, tel, email}){
    return(
        <div className="Container_Icon_h3_p">
            <FontAwesomeIcon icon={icon}/>
            <h3>{title}</h3>
            <p>{text}</p>
            <p>{text2}</p>
            <a href='tel:1-819-237-9813'>{tel}</a>
            <a href='mailto:entretiensgrondin@hotmail.com'>{email}</a>
        </div>
    );
};
export default Icon_H3_P;