import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiscord, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'


export const icons = {
    link: <FontAwesomeIcon icon={faLink} ></FontAwesomeIcon>,
    link2: <FontAwesomeIcon icon={faArrowUpRightFromSquare} ></FontAwesomeIcon>,
    logo: <FontAwesomeIcon icon={faStarOfLife} ></FontAwesomeIcon>,
    arrowDown: <FontAwesomeIcon icon={faArrowDown} ></FontAwesomeIcon>,
    earth: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    location: <FontAwesomeIcon icon={faLocationDot} ></FontAwesomeIcon>,
    discord: <FontAwesomeIcon icon={faDiscord} ></FontAwesomeIcon>,
    instagram: <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>,
    twitter: <FontAwesomeIcon  icon={faTwitter}></FontAwesomeIcon>,
    email: <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>,
    back: <FontAwesomeIcon icon={faArrowTurnUp} ></FontAwesomeIcon>
}