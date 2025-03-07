"use client";

import Image from "next/image";
import { useEffect} from 'react';

export default function CroppedDogImage()
{
    {
        useEffect(() => {
            let croppedDogImage_parentElements = document.getElementsByClassName("cropped-dog-image_parent-element");

            for(let i_0 = 0; i_0 < croppedDogImage_parentElements.length; i_0++)
            {
                let current_CroppedDogImage_parentElement = croppedDogImage_parentElements[i_0];
                let current_CroppedDogImage_parentElement_attributes = current_CroppedDogImage_parentElement.attributes;
                let current_CroppedDogImage_parentElement_attribute_dataDisplayBeenSet_value = undefined;
                let current_CroppedDogImage_parentElement_attribute_dataDisplayBeenSet_index = undefined;

                for(let i_1 = 0; i_1 < current_CroppedDogImage_parentElement_attributes.length; i_1++)
                {
                    let current_CroppedDogImage_parentElement_attribute = current_CroppedDogImage_parentElement_attributes[i_1];

                    if(current_CroppedDogImage_parentElement_attribute.nodeName == "data-display_been_set")
                    {
                        current_CroppedDogImage_parentElement_attribute_dataDisplayBeenSet_value = current_CroppedDogImage_parentElement_attribute.nodeValue;
                        current_CroppedDogImage_parentElement_attribute_dataDisplayBeenSet_index = i_1;
                        break;
                    }
                }

                if(current_CroppedDogImage_parentElement_attribute_dataDisplayBeenSet_value == "false")
                {
                    current_CroppedDogImage_parentElement.attributes[current_CroppedDogImage_parentElement_attribute_dataDisplayBeenSet_index].nodeValue = "true";

                    let croppedDogImage_display = undefined;
                    let croppedDogImage_source = undefined;
                    let croppedDogImage_parentElement_childNodes = current_CroppedDogImage_parentElement.childNodes;

                    for(let i_0 = 0; i_0 < croppedDogImage_parentElement_childNodes.length; i_0++)
                    {
                        let croppedDogImage_parentElement_childNode = croppedDogImage_parentElement_childNodes[i_0];

                        if(croppedDogImage_parentElement_childNode.className == "cropped-dog-image_display")
                        {
                            croppedDogImage_display = croppedDogImage_parentElement_childNode as HTMLCanvasElement;
                        }
                        if(croppedDogImage_parentElement_childNode.className == "cropped-dog-image_source")
                        {
                            croppedDogImage_source = croppedDogImage_parentElement_childNode as HTMLImageElement;
                        }
                    }
                    
                    if((croppedDogImage_display != undefined && croppedDogImage_display != null) && (croppedDogImage_source != undefined && croppedDogImage_source != null))
                    {
                        let croppedDogImage_display_renderingContext = croppedDogImage_display.getContext("2d");
                        croppedDogImage_display_renderingContext.drawImage(croppedDogImage_source, -406, 0);
                        croppedDogImage_source.style.display = "none";
                    }
                }
            }
        });
    }
    return (
        <div className="cropped-dog-image_parent-element" data-display_been_set="false">
            <canvas className="cropped-dog-image_display" width="390" height="396"></canvas>
            <Image className="cropped-dog-image_source" src="/png/3f374d705a2de11e012f09e86bcac539.png" width={792} height={396} alt="792*396" />
        </div>
    );
}