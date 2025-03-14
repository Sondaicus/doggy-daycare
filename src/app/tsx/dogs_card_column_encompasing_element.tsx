"use client";

import fetchAllDogs from "../scripts/typescript/read_api";
import { useEffect, useState } from 'react';
import {Dog, Owner} from "../scripts/typescript/dog_interface";
import Link from "next/link";
import { useRouter } from 'next/router'
import DogCardColumnObject from "../tsx/doggs_card_column_object";
import React, {FunctionComponent, PropsWithChildren} from 'react';

export function DogCardColumnHolder(fetched_dogs)
{
    {
        useEffect(() =>
        {
            let dogs = fetched_dogs.fetched_dogs;
          
            let dogList_columnElements = document.getElementsByClassName("dog-list-page_main-content_encompasing-element"); 

          

            let dogList_columnElement = dogList_columnElements[0];


       console.dir(dogs);

            for(let i_0 = 0; i_0 < dogs.length; i_0++)
            {
                let dog_object = dogs[i_0];

                console.log("");
                console.dir(dog_object );
        

                let dog_column_element_object: typeof DogCardColumnObject = () => {
                    return <DogCardColumnObject dog_object={dog_object} />;
                };

         
            
                console.log(dog_column_element_object);
                console.dir(dog_column_element_object);
      
            }
        });
    }
    
    return(
        <div className="dog-list-page_main-content_encompasing-element">
        </div>
    );
}