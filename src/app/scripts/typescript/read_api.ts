"use server";

import { Dog } from "@/app/scripts/typescript/dog_interface";

export default async function fetchAllDogs() 
{
    let api_base = "https://majazocom.github.io/Data/dogs.json";
    let url = new URL(api_base);

    let response = await fetch(url)
    .catch((e) => console.error(e));

    if(response)
    {
        return response.json();
    }
}

export async function fetchDogByChipNumber(dog_chipNumber) 
{
    let results : Dog[] = [];
    let json_data : Dog[] = await fetchAllDogs();

    for(let i_0 = 0; i_0 < json_data.length; i_0++)
    {
        let current_dog : Dog = json_data[i_0];

        if(current_dog.chipNumber == dog_chipNumber)
        {
            results.push(current_dog);
        }
    }

    return results;
}

export async function fetchDogNumbers() 
{
    let json_data : Dog[] = await fetchAllDogs();
    let results = json_data.length;

    return results;
}

export async function fetchThisDogsNumber(dog_object) 
{
    let results : number = -1;
    let json_data : Dog[] = await fetchAllDogs();

    for(let i_0 = 0; i_0 < json_data.length; i_0++)
    {
        let current_dog : Dog = json_data[i_0];

        if(current_dog.chipNumber == dog_object.chipNumber)
        {
            results = i_0 + 1;
            break;
        }
    }

    return results;
}

export async function fetchNextDogsChipNumber(dog_object) 
{
    let results : string = "FALSE";
    let index_to_use : number = -1;
    let json_data : Dog[] = await fetchAllDogs();

    for(let i_0 = 0; i_0 < json_data.length; i_0++)
    {
        let current_dog : Dog = json_data[i_0];

        console.log(current_dog.chipNumber);

        if(current_dog.chipNumber == dog_object.chipNumber)
        {
            if(i_0 != (json_data.length - 1))
            {
                index_to_use = i_0 + 1;
            }
            
            break;
        }
    }

    if(index_to_use != -1)
    {
        results = json_data[index_to_use].chipNumber;
    }

    return results;
}

export async function fetchPreviousDogsChipNumber(dog_object) 
{
    let results : string = "FALSE";
    let index_to_use : number = -1;
    let json_data : Dog[] = await fetchAllDogs();

    for(let i_0 = 0; i_0 < json_data.length; i_0++)
    {
        let current_dog : Dog = json_data[i_0];

        if(current_dog.chipNumber == dog_object.chipNumber)
        {
            if(i_0 != 0)
            {
                index_to_use = i_0 - 1;
            }

            break;
        }
    }

    if(index_to_use != -1)
    {
        results = json_data[index_to_use].chipNumber;
    }

    return results;
}

export async function fetchFirstDogsChipNumber() 
{
    let json_data : Dog[] = await fetchAllDogs();

    let results : string = json_data[0].chipNumber;

    return results;
}

export async function fetchLastDogsChipNumber() 
{
    let json_data : Dog[] = await fetchAllDogs();

    let results : string = json_data[(json_data.length - 1)].chipNumber;

    return results;
}