"use client";

import fetchAllDogs from "../scripts/typescript/read_api";
import { useEffect, useState } from 'react';
import {Dog, Owner} from "../scripts/typescript/dog_class";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function DogCardColumnObject(dog_object)
{
    useRouter()
    {
        let dog = new Dog(dog_object);
        let href_path = "../dog_page/" + dog.getChipNumber() + "/page.tsx";
        let dog_name = dog.getName();

        let drp_dom = document.querySelector('.dog_dyncamic-route-page_link[href=' + href_path);

        console.log(drp_dom);

        let drp_nameParagraph_dom = undefined;

        for(let i_0 = 0; i_0 < drp_dom?.childNodes.length; i_0++)
        {
            let childNode = drp_dom.childNodes[i_0];

            console.log(childNode);
        }
    
        return(
            <div className="dog_card_ecompasing-element">
                <Link className="dog_dyncamic-route-page_link" href={href_path}>
                    <p className="dog_card_name-element"></p>
                    <section></section>
                </Link>
            </div>
        );
    }
}