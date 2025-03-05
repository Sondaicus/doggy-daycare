"use client";

import fetchAllDogs from "../scripts/typescript/read_api";
import { useEffect, useState } from 'react';

export default function DogCardObject()
{
    {
        fetchAllDogs();
    }
    return(
        
        <div className="dog_card_ecompasing_element">
            <p>Dog name</p>
            <section></section>
        </div>
    );
}