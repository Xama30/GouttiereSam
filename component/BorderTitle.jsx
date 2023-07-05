import NextLink from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRightLong);

function BorderTitle({title, text, detail, link, className}){
    const classNameBorder = 'BT__ContainerM ' + className;
    let display = "";
    let linkNotEmpty = link;
    if (link === undefined) {
        linkNotEmpty = '';
      }

    if (detail === "T"){
        display="block";
    } else if (detail === "F"){
        display="none";
    }

    return(
        <div id="BorderTitle" className={classNameBorder}>
            <div className="BT__Container">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="BT__VoirDetail">
                <NextLink style={{display: display}} href={linkNotEmpty}>
                    <span>Voir en détails</span>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                </NextLink>
            </div>
        </div>
    )
}

export default BorderTitle;