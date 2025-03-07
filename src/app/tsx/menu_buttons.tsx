import DogCardObject from "../tsx/doggs_card_object";
import {ListPageLogo} from "../tsx/logos";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faFilter} from '@fortawesome/free-solid-svg-icons'


export function ButtonSearch() 
{
    return(
        <div className="dog-list-page_button-encompasing-element">
            <button className="dog-list-page_header-button" data-element_style="button">
                <FontAwesomeIcon className="font-awesome-icon_header-button" icon={faMagnifyingGlass} />
                <p className="dog-list-page_header-button_paragraph-element">Search</p>
            </button>
        </div>
    );
}

export function ButtonFilter() 
{
    return(
        <div className="dog-list-page_button-encompasing-element">
            <button className="dog-list-page_header-button" data-element_style="button">
                <FontAwesomeIcon className="font-awesome-icon_header-button" icon={faFilter} />
                <p className="dog-list-page_header-button_paragraph-element">Filter</p>
            </button>
        </div>
    );
}
