"use client";

import { useEffect, useState } from 'react';
import {Dog, Owner} from "../scripts/typescript/dog_interface";
import Link from "next/link";
import { useRouter } from 'next/router'
import Image from "next/image";
import {MaximiseDistanceWidth , MaximiseDistanceHeight} from "../tsx/distance_maximising_elements";
import React from 'react'
import { useReducer } from 'react';

export default function DogPresentToggleButton(dog_object)
{
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    let button_color : string = "rgb(255, 255, 255)";
    let orb_placement : string = "0px";
    let dog = dog_object.dog_object;
    let dog_is_present = dog.present;
    ShowPresentStatus();

    function ShowPresentStatus()
    {
        if(dog_is_present)
        {
            button_color = "rgb(43, 146, 77)";
            orb_placement = "-15px"
        }
        else if(!dog_is_present)
        {
            button_color = "rgb(195, 67, 138)";
            orb_placement = "16px"
        }
    }
    function ChangePresentStatus()
    {
        if(dog_is_present)
        {
            dog_object.dog_object.present = false;
        }
        else if(!dog_is_present)
        {
            dog_object.dog_object.present = true;
        }
        forceUpdate();
    }

    return(
        <div className="dog-is-present_toggle-button_ecompasing-element">
            <div className="dog-is-present_paragraph_ecompasing-element">
                <p className="dog-is-present_paragraph">Is present</p>
            </div>
            <button className="dog-is-present_button_ecompasing-element" onClick={ChangePresentStatus}>
                <div className="dog-is-present_bgc_ecompasing-element" style={{backgroundColor: button_color}}>
                    <div className="dog-is-present_button-status_ecompasing-element"></div>
                    <div className="dog-is-present_button-status_orb" style={{right: orb_placement}}></div>
                </div>
            </button>
        </div>
    );
}