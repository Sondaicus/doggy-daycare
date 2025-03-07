"use client";

import Image from "next/image";
import { useEffect} from 'react';

export function MaximiseDistanceWidth(maxDistance_parameter) 
{
    {
        useEffect(() => {
            let maxDistance_number = maxDistance_parameter.maxDistance_parameter;
            let distanceMaximisingElements_width = document.getElementsByClassName("distance-maximising-element_width");

            for(let i_0 = 0; i_0 < distanceMaximisingElements_width.length; i_0++)
            {
                let current_distanceMaximisingElement = distanceMaximisingElements_width[i_0];
                let current_distanceMaximisingElement_parent = current_distanceMaximisingElement.parentElement;
                let current_distanceMaximisingElement_parent_children = current_distanceMaximisingElement_parent?.childNodes;
                let current_distanceMaximisingElement_parent_children_length = current_distanceMaximisingElement_parent_children.length;
                let maximisingDistanceElementsInParent = [];
                let nonMaximisingDistanceElementsInParent_offsetWidth = 0;

                for(let i_1 = 0; i_1 < current_distanceMaximisingElement_parent_children_length; i_1++)
                {
                    let current_childNode = current_distanceMaximisingElement_parent_children[i_1];
                    let current_childNode_className = current_childNode.className;

                    if(current_childNode_className == "distance-maximising-element_width")
                    {
                        maximisingDistanceElementsInParent.push(current_childNode);
                    }
                    else
                    {
                        let current_childNode_offsetWidth = current_childNode.offsetWidth;
                        nonMaximisingDistanceElementsInParent_offsetWidth = nonMaximisingDistanceElementsInParent_offsetWidth + current_childNode_offsetWidth;
                    }
                }

                let maximisingDistanceToUse = maxDistance_number - nonMaximisingDistanceElementsInParent_offsetWidth;
                let maximisingDistanceElementsInParent_length = maximisingDistanceElementsInParent.length;
                let maximisingDistancePerElement = maximisingDistanceToUse / maximisingDistanceElementsInParent_length;
                let maximisingDistancePerElement_pixelString = "" + maximisingDistancePerElement + "px"

                for(let i_1 = 0; i_1 < maximisingDistanceElementsInParent_length; i_1++)
                {
                    let current_childNode_distanceMaximisingElement =  maximisingDistanceElementsInParent[i_1];
                    current_childNode_distanceMaximisingElement.style.width = maximisingDistancePerElement_pixelString;
                }
            }
        });
    }
    return(
        <div className="distance-maximising-element_width"></div>
    );
}

export function MaximiseDistanceHeight(maxDistance_parameter) 
{
    {
        useEffect(() => {
            let maxDistance_number = maxDistance_parameter.maxDistance_parameter;
            let distanceMaximisingElements_height = document.getElementsByClassName("distance-maximising-element_height");

            for(let i_0 = 0; i_0 < distanceMaximisingElements_height.length; i_0++)
            {
                let current_distanceMaximisingElement = distanceMaximisingElements_height[i_0];
                let current_distanceMaximisingElement_parent = current_distanceMaximisingElement.parentElement;
                let current_distanceMaximisingElement_parent_children = current_distanceMaximisingElement_parent?.childNodes;
                let current_distanceMaximisingElement_parent_children_length = current_distanceMaximisingElement_parent_children.length;
                let maximisingDistanceElementsInParent = [];
                let nonMaximisingDistanceElementsInParent_offsetHeight = 0;

                for(let i_1 = 0; i_1 < current_distanceMaximisingElement_parent_children_length; i_1++)
                {
                    let current_childNode = current_distanceMaximisingElement_parent_children[i_1];
                    let current_childNode_className = current_childNode.className;

                    if(current_childNode_className == "distance-maximising-element_height")
                    {
                        maximisingDistanceElementsInParent.push(current_childNode);
                    }
                    else
                    {
                        let current_childNode_offsetHeight = current_childNode.offsetHeight;
                        nonMaximisingDistanceElementsInParent_offsetHeight = nonMaximisingDistanceElementsInParent_offsetHeight + current_childNode_offsetHeight;
                    }
                }

                let maximisingDistanceToUse = maxDistance_number - nonMaximisingDistanceElementsInParent_offsetHeight;
                let maximisingDistanceElementsInParent_length = maximisingDistanceElementsInParent.length;
                let maximisingDistancePerElement = maximisingDistanceToUse / maximisingDistanceElementsInParent_length;
                let maximisingDistancePerElement_pixelString = "" + maximisingDistancePerElement + "px"

                for(let i_1 = 0; i_1 < maximisingDistanceElementsInParent_length; i_1++)
                {
                    let current_childNode_distanceMaximisingElement =  maximisingDistanceElementsInParent[i_1];
                    current_childNode_distanceMaximisingElement.style.height = maximisingDistancePerElement_pixelString;
                }
            }
        });
    }
    return(
        <div className="distance-maximising-element_height"></div>
    );
}
