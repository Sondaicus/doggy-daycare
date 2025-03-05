"use client";

import { useEffect, useState } from 'react';

export default function ClickOnButton()
{
    useEffect(() => {
        const button = document.getElementById("imgClickButton") as HTMLButtonElement;
        const ccc = document.getElementsByClassName("size_covering_element")[0];
        console.log(button);
        button.onclick = (event: MouseEvent) => {
            let doggyMainFooterImage_elements = undefined;
            let doggyMainFooterImage = undefined;
            let doggyMainFooterImage_style = undefined;
            let doggyMainFooterImage_offsetWidth = undefined;
    
            doggyMainFooterImage_elements = document.getElementsByClassName("startPageFooterImage");
    
            if(doggyMainFooterImage_elements != undefined && doggyMainFooterImage_elements != null)
            {
                if(doggyMainFooterImage_elements.length > 0)
                {
                    doggyMainFooterImage = doggyMainFooterImage_elements[0];
                }
            }
    
            if(doggyMainFooterImage != undefined)
            {
                doggyMainFooterImage_style = doggyMainFooterImage.style;
                doggyMainFooterImage_offsetWidth = doggyMainFooterImage.offsetWidth;
            }
    
    
    
            console.dir("");
            console.dir(window);
            console.dir(doggyMainFooterImage);
            console.dir(doggyMainFooterImage.getBoundingClientRect().width);
            console.dir(doggyMainFooterImage?.clientWidth);
            console.dir(doggyMainFooterImage_style);
            console.dir(doggyMainFooterImage_offsetWidth);

            console.dir(ccc);


            console.dir(ccc);
        };
    });
    return (
        <button id="imgClickButton">AAAAAAAAA</button>
    );
}

export function GetImageSize()
{
    useEffect(() => {
        let doggyMainFooterImage_elements = undefined;
        let doggyMainFooterImage = undefined;
        let doggyMainFooterImage_style = undefined;
        let doggyMainFooterImage_style_clipPath = "";
        let doggyMainFooterImage_pre_offsetWidth = undefined;
        let doggyMainFooterImage_clipPath_right = 0;
        let doggyMainFooterImage_clipPath_left = 0;
        let doggyMainFooterImage_post_offsetWidth = undefined;

        doggyMainFooterImage_elements = document.getElementsByClassName("startPageFooterImage");

        if(doggyMainFooterImage_elements != undefined && doggyMainFooterImage_elements != null)
        {
            if(doggyMainFooterImage_elements.length > 0)
            {
                doggyMainFooterImage = doggyMainFooterImage_elements[0];
            }
        }

        if(doggyMainFooterImage != undefined)
        {
            doggyMainFooterImage_style = doggyMainFooterImage.style;
            doggyMainFooterImage_pre_offsetWidth = doggyMainFooterImage.offsetWidth;
        }

        if(doggyMainFooterImage_style != undefined)
        {
            doggyMainFooterImage_style_clipPath = doggyMainFooterImage_style.clipPath;
        }

        if(doggyMainFooterImage_pre_offsetWidth != undefined)
        {
            doggyMainFooterImage_clipPath_right = doggyMainFooterImage_pre_offsetWidth * 0.0189393939393939393939393939393939393939;
            doggyMainFooterImage_clipPath_left = doggyMainFooterImage_pre_offsetWidth * 0.4905537974683544303797468354430379746836;
        }

        if(doggyMainFooterImage_clipPath_right != 0 || doggyMainFooterImage_clipPath_left != 0)
        {
            
        }

        if(doggyMainFooterImage_style_clipPath != "")
        {
            doggyMainFooterImage.style.clipPath = doggyMainFooterImage_style_clipPath;
            doggyMainFooterImage_post_offsetWidth = doggyMainFooterImage.offsetWidth;
        }



        console.dir(doggyMainFooterImage);
        console.dir(doggyMainFooterImage_style);
        console.dir(doggyMainFooterImage_clipPath_right);
        console.dir(doggyMainFooterImage_clipPath_left);
        console.dir(doggyMainFooterImage_style_clipPath);
        console.dir(doggyMainFooterImage_pre_offsetWidth);
        console.dir(doggyMainFooterImage_post_offsetWidth);
    });
}