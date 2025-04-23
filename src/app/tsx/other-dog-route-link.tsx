import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft , faChevronRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

export default function DogDynamicRouteListed(paramsCompiled)
{
    let dogChipNumber : string = paramsCompiled.paramsCompiled[0]; 
    let linkType : number = paramsCompiled.paramsCompiled[1]; 
    let href_path = "../dog_page/" + dogChipNumber;
    let linkAwesomeStyle_1 : string = "";
    let linkAwesomeStyle_2 : string = "";
    let displayType: string = "normal";

    if(dogChipNumber == "FALSE")
    {
        displayType = "dead-end";
        href_path = "";
    }

    if(linkType == -2)
    {
        linkAwesomeStyle_1 = faChevronLeft;
        linkAwesomeStyle_2 = faChevronLeft;
    }
    else if(linkType == -1)
    {
        linkAwesomeStyle_1 = faChevronLeft;
    }
    else if(linkType == 1)
    {
        linkAwesomeStyle_1 = faChevronRight;
    }
    else if(linkType == 2)
    {
        linkAwesomeStyle_1 = faChevronRight;
        linkAwesomeStyle_2 = faChevronRight;
    }

    return(
        <div className="dog_listed-route-page_ecompasing-element">
            <Link className="dog_listed-route-page_link" href={href_path}>
                <FontAwesomeIcon className="dog-list-other-icon" data-displayType={displayType} icon={linkAwesomeStyle_1} />
                <FontAwesomeIcon className="dog-list-other-icon" data-displayType={displayType} icon={linkAwesomeStyle_2} />
            </Link>
        </div>
    );
}