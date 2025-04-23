import React from 'react'

export default function DogNumberInList(paramsCompiled)
{
    let this_dogs_number : number = paramsCompiled.paramsCompiled[0]; 
    let dog_numbers : number = paramsCompiled.paramsCompiled[1]; 

    return(
        <div className="dog_number-in-list_ecompasing-element">
            <p>{this_dogs_number} of {dog_numbers}</p>
        </div>
    );
}