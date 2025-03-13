"use client";

import fetchAllDogs from "../scripts/typescript/read_api";
import { useEffect, useState } from 'react';
import {Dog, Owner} from "../scripts/typescript/dog_class";
import Link from "next/link";
import { useRouter } from 'next/router'
import DogCardColumnObject from "../tsx/doggs_card_column_object";

export function DogCardColumnHolder(fetched_dogs)
{
    {
        useEffect(() =>
        {
            let dogs = fetched_dogs.fetched_dogs;
            console.log(fetched_dogs);
            console.dir(fetched_dogs);
            console.log(dogs);
            console.dir(dogs);
            
            console.log("hey");

            let dogList_columnElements = document.getElementsByClassName("dog-list-page_main-content_encompasing-element"); 

            console.log(dogList_columnElements);

            let dogList_columnElement = dogList_columnElements[0];

            console.log(dogList_columnElement);

           
            console.log(dogs.length);

            for(let i_0 = 0; i_0 < dogs.length; i_0++)
            {
                let dog_object = dogs[i_0];

                console.log("");
                console.log(dog_object);
                console.dir(dog_object);

                let dog_column_element_object: DogCardColumnObject = () => {
                    return <DogCardColumnObject dog_object={dog_object} />;
                };

                /*
                let fff = document.createElement("<DogCardColumnObject />");

                console.log(fff);
                */

                ///let fff = <DogCardColumnObject dog_object={dog_object} />;

                console.log(dog_column_element_object);
                console.dir(dog_column_element_object);

                dogList_columnElement.innerHTML = dogList_columnElement.innerHTML + dog_column_element_object;

                console.log(dogList_columnElement.innerHTML);
                console.dir(dogList_columnElement.innerHTML);
            }
        });
    }
    
    return(
        <div className="dog-list-page_main-content_encompasing-element">
        </div>
    );
}