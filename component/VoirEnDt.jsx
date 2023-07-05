import NextLink from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong} from '@fortawesome/free-solid-svg-icons';
library.add(faArrowRightLong);


function VoirEnDt({display, link, color, colorLign}){
    return(
        <div className="BT__VoirDetail">
            <NextLink className={colorLign} style={{color: color, display: display}} href={link}>
                <span>Voir en détails</span>
                <FontAwesomeIcon icon={faArrowRightLong} />
            </NextLink>
        </div>
    )
}
export default VoirEnDt;