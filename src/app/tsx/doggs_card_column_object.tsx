"use client";

import fetchAllDogs from "../scripts/typescript/read_api";
import { useEffect, useState } from 'react';
import {Dog, Owner} from "../scripts/typescript/dog_class";

export default function DogCardColumnObject(dog_object)
{
    let dog = new Dog(dog_object);
   
    return(
        <div className="dog_card_ecompasing_element">
            <p>dog.name</p>
            <section></section>
        </div>
    );
}