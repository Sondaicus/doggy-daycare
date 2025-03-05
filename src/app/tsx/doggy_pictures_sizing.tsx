"use client";

import Image from "next/image";
import { useEffect, useState } from 'react';

export default function CroppedDogImage()
{
    {
        useEffect(() => {
            /*SECTION: Declaring all variables.*/
            /*ANCHOR: Main display components.*/
            let croppedDogImage_display_elements = undefined;
            let croppedDogImage_display = undefined;

            /*ANCHOR: Main display components rendering context.*/
            let croppedDogImage_display_renderingContext = undefined;

            /*ANCHOR: Main source components.*/
            let croppedDogImage_source_elements = undefined;
            let croppedDogImage_source = undefined;

            /*ANCHOR: Main display components size values.*/
            let croppedDogImage_display_offsetHeight = undefined;
            let croppedDogImage_display_height = undefined;
            let croppedDogImage_display_naturalHeight = undefined;
            let croppedDogImage_display_usingHeight = undefined;

            /*ANCHOR: Main source components base size values.*/
            /*ANCHOR: Height.*/
            let croppedDogImage_source_offsetHeight = undefined;
            let croppedDogImage_source_height = undefined;
            let croppedDogImage_source_naturalHeight = undefined;
            let croppedDogImage_source_baseHeight = undefined;
            /*ANCHOR: Width.*/
            let croppedDogImage_source_offsetWidth = undefined;
            let croppedDogImage_source_width = undefined;
            let croppedDogImage_source_naturalWidth = undefined;
            let croppedDogImage_source_baseWidth = undefined;

            /*ANCHOR: Main source components recalculated size values.*/
            let croppedDogImage_source_usingHeight = undefined;
            let croppedDogImage_source_usingWidth = undefined;

            /*ANCHOR: Partwise differentals in source and display component's height's.*/
            let croppedDogImage_sourceAndDisplay_partwiseHeightDifferences = undefined;
            /*!SECTION: Declaring all variables.*/

            /*SECTION: Varaible values assigning.*/
            /*ANCHOR: Main display components.*/
            croppedDogImage_display_elements = document.getElementsByClassName("croppedDogImage_display");
            if(croppedDogImage_display_elements != undefined && croppedDogImage_display_elements != null)
            {
                if(croppedDogImage_display_elements.length > 0)
                {
                    croppedDogImage_display = croppedDogImage_display_elements[0] as HTMLCanvasElement;
                }
            }

            /*ANCHOR: Main source components.*/
            croppedDogImage_source_elements = document.getElementsByClassName("croppedDogImage_source");
            if(croppedDogImage_source_elements != undefined && croppedDogImage_source_elements != null)
            {
                if(croppedDogImage_source_elements.length > 0)
                {
                    croppedDogImage_source = croppedDogImage_source_elements[0]  as HTMLImageElement;
                }
            }

            /*ANCHOR: Main display components size values, height.*/
            if(croppedDogImage_display != undefined)
            {
                croppedDogImage_display_offsetHeight = croppedDogImage_display.offsetHeight;
                croppedDogImage_display_height = croppedDogImage_display.height;
                croppedDogImage_display_naturalHeight = croppedDogImage_display.naturalHeight;
            }
            if(croppedDogImage_display_offsetHeight != undefined && croppedDogImage_display_offsetHeight != null && croppedDogImage_display_offsetHeight != 0)
            {
                croppedDogImage_display_usingHeight = croppedDogImage_display_offsetHeight;
                console.log("display_offsetHeight");
            }
            else if(croppedDogImage_display_height != undefined && croppedDogImage_display_height != null && croppedDogImage_display_height != 0)
            {
                croppedDogImage_display_usingHeight = croppedDogImage_display_height;
                console.log("display_height");
            }
            else if(croppedDogImage_display_naturalHeight != undefined && croppedDogImage_display_naturalHeight != null && croppedDogImage_display_naturalHeight != 0)
            {
                croppedDogImage_display_usingHeight = croppedDogImage_display_naturalHeight;
                console.log("display_naturalHeight");
            }

            /*ANCHOR: Main source components base size values.*/
            if(croppedDogImage_source != undefined)
            {
                /*ANCHOR: Height.*/
                croppedDogImage_source_offsetHeight = croppedDogImage_source.offsetHeight;
                croppedDogImage_source_height = croppedDogImage_source.height;
                croppedDogImage_source_naturalHeight = croppedDogImage_source.naturalHeight;
                /*ANCHOR: Width.*/
                croppedDogImage_source_offsetWidth  = croppedDogImage_source.offsetWidth;
                croppedDogImage_source_width = croppedDogImage_source.width;
                croppedDogImage_source_naturalWidth = croppedDogImage_source.naturalWidth;
            }

            /*ANCHOR: Main source components base size using values, height.*/
            if(croppedDogImage_source_offsetHeight != undefined && croppedDogImage_source_offsetHeight != null && croppedDogImage_source_offsetHeight != 0)
            {
                croppedDogImage_source_baseHeight = croppedDogImage_source_offsetHeight;
                console.log("source_offsetHeight");
            }
            else if(croppedDogImage_source_height != undefined && croppedDogImage_source_height != null && croppedDogImage_source_height != 0)
            {
                croppedDogImage_source_baseHeight = croppedDogImage_source_height;
                console.log("source_height");
            }
            else if(croppedDogImage_source_naturalHeight != undefined && croppedDogImage_source_naturalHeight != null && croppedDogImage_source_naturalHeight != 0)
            {
                croppedDogImage_source_baseHeight = croppedDogImage_source_naturalHeight;
                console.log("source_naturalHeight");
            }

            /*ANCHOR: Main source components base size using values, width.*/
            if(croppedDogImage_source_offsetWidth != undefined && croppedDogImage_source_offsetWidth != null && croppedDogImage_source_offsetWidth != 0)
            {
                croppedDogImage_source_baseWidth = croppedDogImage_source_offsetWidth;
                console.log("source_offsetWidth");
            }
            else if(croppedDogImage_source_width != undefined && croppedDogImage_source_width != null && croppedDogImage_source_width != 0)
            {
                croppedDogImage_source_baseWidth = croppedDogImage_source_width;
                console.log("source_width");
            }
            else if(croppedDogImage_source_naturalWidth != undefined && croppedDogImage_source_naturalWidth != null && croppedDogImage_source_naturalWidth != 0)
            {
                croppedDogImage_source_baseWidth = croppedDogImage_source_naturalWidth;
                console.log("source_naturalWidth");
            }

            /*ANCHOR: Partwise differental values in source and display component's height's.*/
            if((croppedDogImage_display_usingHeight != undefined && croppedDogImage_display_usingHeight != null && croppedDogImage_display_usingHeight != 0) && 
            (croppedDogImage_source_baseHeight != undefined && croppedDogImage_source_baseHeight != null && croppedDogImage_source_baseHeight != 0))
            {
                croppedDogImage_sourceAndDisplay_partwiseHeightDifferences = croppedDogImage_display_usingHeight / croppedDogImage_source_baseHeight;
            }

            if(croppedDogImage_sourceAndDisplay_partwiseHeightDifferences != undefined && croppedDogImage_sourceAndDisplay_partwiseHeightDifferences != null && croppedDogImage_sourceAndDisplay_partwiseHeightDifferences != 0)
            {
                croppedDogImage_source_usingHeight = croppedDogImage_source_baseHeight * croppedDogImage_sourceAndDisplay_partwiseHeightDifferences;
                croppedDogImage_source_usingWidth = croppedDogImage_source_baseWidth * croppedDogImage_sourceAndDisplay_partwiseHeightDifferences;
            }

            console.log(croppedDogImage_display);
            /*ANCHOR: Canvas rendering context.*/
            croppedDogImage_display_renderingContext = croppedDogImage_display.getContext("2d");
            /*!SECTION: Varaible values assigning.*/

            /*SECTION: Document element values assigning.*/
            if((croppedDogImage_source_usingHeight != undefined && croppedDogImage_source_usingHeight != null && croppedDogImage_source_usingHeight != 0) &&
            (croppedDogImage_source_usingWidth != undefined && croppedDogImage_source_usingWidth != null && croppedDogImage_source_usingWidth != 0))
            {
                croppedDogImage_source.height = croppedDogImage_source_usingHeight;
                croppedDogImage_source.width = croppedDogImage_source_usingWidth;
                console.log("yagg");
                console.log(croppedDogImage_source_usingHeight);
                console.log(croppedDogImage_source_usingWidth);
                console.log(croppedDogImage_source.height);
                console.log(croppedDogImage_source.width);
            }
            /*!SECTION: Document element values assigning.*/
      
            let agg = 0.5094931914077483697736862293824319140775 * croppedDogImage_source_usingWidth * -1;
            //let agg = 0.66 * croppedDogImage_source_usingWidth * -1;

            console.log(agg);

            const image = document.getElementById("scream") as HTMLImageElement;

           

          

            croppedDogImage_display_renderingContext.drawImage(image, -406, 0);

            console.log(croppedDogImage_display_renderingContext);
           console.dir(croppedDogImage_display_renderingContext);
            console.dir(croppedDogImage_display);
            console.dir(croppedDogImage_source);

            /*
            if(startPageFooterImage_source_offsetWidth != undefined && startPageFooterImage_source_offsetWidth != null && startPageFooterImage_source_offsetWidth != 0)
            {
                startPageFooterImage_source_naturalWidth = startPageFooterImage_source_offsetWidth;
                console.log("offsetWidth");
            }
            else if(startPageFooterImage_source_width != undefined && startPageFooterImage_source_width != null && startPageFooterImage_source_width != 0)
            {
                startPageFooterImage_source_usingWidth = startPageFooterImage_source_width;
                console.log("width");
            }
            else if(startPageFooterImage_source_naturalWidth != undefined && startPageFooterImage_source_naturalWidth != null && startPageFooterImage_source_naturalWidth != 0)
            {
                startPageFooterImage_source_usingWidth = startPageFooterImage_source_naturalWidth;
                console.log("naturalWidth");
            }

            if(startPageFooterImage_source_usingWidth != undefined)
            {
                doggyMainFooterImage_clipPath_right = startPageFooterImage_source_usingWidth * 0.0189393939393939393939393939393939393939;
                doggyMainFooterImage_clipPath_left = startPageFooterImage_source_usingWidth * 0.4905537974683544303797468354430379746836;
            }

            if(doggyMainFooterImage_clipPath_right != 0 || doggyMainFooterImage_clipPath_left != 0)
            {
                doggyMainFooterImage_style_clipPath = "inset(0px " + doggyMainFooterImage_clipPath_right + "px 0px " + doggyMainFooterImage_clipPath_left + "px)";
            }

            if(doggyMainFooterImage_style_clipPath != "")
            {
                doggyMainFooterImage.style.clipPath = doggyMainFooterImage_style_clipPath;
            }
            */


            let imagePath = '/png/3f374d705a2de11e012f09e86bcac539.png';
      
         

        
           // ctx.drawImage(img, doggyMainFooterImage_clipPath_full_negative, 0);
           // ctx.fill();
           
    
  
           

        });
    }
    return (
        
        <div className="size_covering_element">
            <canvas className="croppedDogImage_display" width="390" height="396"></canvas>
            <Image className="croppedDogImage_source" id="scream" src="/png/3f374d705a2de11e012f09e86bcac539.png" width={792} height={396} alt="1200*600" />
        </div>
    );
}