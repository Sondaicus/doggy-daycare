"use server";

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