"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars , faVenus} from '@fortawesome/free-solid-svg-icons'
import {MaximiseDistanceWidth , MaximiseDistanceHeight} from "../tsx/distance_maximising_elements";
import React from 'react'

export default function DogCardColumnObject(dog_object)
{
    let dog = dog_object.dog_object;
    let href_path = "/dog_list_pages/dog_page/" + dog.chipNumber;
    let dog_sex_symbol = "NON_DEFINED_SEX";
    let dog_card_border_color = "rgb(0, 0, 0)";
    let randomNumberMin = 0;
    let randomNumberMax = 14;
    let randomNumber = Math.floor(Math.random() * (randomNumberMax - randomNumberMin + 1)) + randomNumberMin;

    if(dog.sex == "male")
    {
        dog_sex_symbol = faMars;
    }
    else if(dog.sex == "female")
    {
        dog_sex_symbol = faVenus;
    }

    switch(randomNumber)
    {
        case 0:
        {
            dog_card_border_color = "rgb(195, 67, 198)";
            break;
        }
        case 1:
        {
            dog_card_border_color = "rgb(37, 160, 101)";
            break;
        }
        case 2:
        {
            dog_card_border_color = "rgb(70, 54, 212)";
            break;
        }
        case 3:
        {
            dog_card_border_color = "rgb(217, 219, 64)";
            break;
        }
        case 4:
        {
            dog_card_border_color = "rgb(216, 74, 30)";
            break;
        }
        case 5:
        {
            dog_card_border_color = "rgb(252, 159, 38)";
            break;
        }
        case 6:
        {
            dog_card_border_color = "rgb(91, 243, 218)";
            break;
        }
        case 7:
        {
            dog_card_border_color = "rgb(115, 126, 16)";
            break;
        }
        case 8:
        {
            dog_card_border_color = "rgba(224, 23, 224, 0.94)";
            break;
        }
        case 9:
        {
            dog_card_border_color = "rgba(238, 255, 0, 0.82)";
            break;
        }
        case 10:
        {
            dog_card_border_color = "rgb(113, 198, 255)";
            break;
        }
        case 11:
        {
            dog_card_border_color = "rgb(121, 63, 63)";
            break;
        }
        case 12:
        {
            dog_card_border_color = "rgba(255, 72, 72, 0.89)";
            break;
        }
        case 13:
        {
            dog_card_border_color = "rgba(117, 80, 204, 0.66)";
            break;
        }
        case 14:
        {
            dog_card_border_color = "rgb(0, 145, 65)";
            break;
        }
    }

    return(
        <div className="dog_card_ecompasing-element" style={{backgroundColor: dog_card_border_color}}>
            <Link className="dog_dyncamic-route-page_link" href={href_path}>
                <Image className="dog_card_image" unoptimized={true} loader={() => dog.img} src={dog.img} width={252} height={252} alt="252*252" />
                <section className="dog_card_display-info_ecompasing-element">
                    <section className="dog_card_display-info_dog-values_ecompasing-element">
                        <section className="dog_card_display-info_name-sex-breed_ecompasing-element">
                            <section className="dog_card_display-info_name-sex_ecompasing-element">
                                <p className="dog_card_name-element">{dog.name}</p>
                                <FontAwesomeIcon className="dog_card_sex-element" icon={dog_sex_symbol} />
                            </section>
                            <section className="dog_card_display-info_breed_ecompasing-element">
                                <p className="dog_card_breed-element">{dog.breed}</p>
                            </section>
                        </section>
                        <MaximiseDistanceWidth maxDistance_parameter={242} />
                        <section className="dog_card_display-info_age_ecompasing-element">
                            <p className="dog_card_age-element">{dog.age}y/o</p>
                            <MaximiseDistanceHeight maxDistance_parameter={48} />
                        </section>
                    </section>
                    <section className="dog_card_display-info_owner_ecompasing-element">
                        <p className="dog_card_owner-element">OWNER: {dog.owner.name}</p>
                        <MaximiseDistanceWidth maxDistance_parameter={242} />
                    </section>
                </section>
            </Link>
        </div>
    );
}