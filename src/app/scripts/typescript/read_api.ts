"use server";

const API_BASE = "https://majazocom.github.io/Data/dogs.json";

export interface Dog
{
    name: string;
    sex: string;
    breed: string;
    img: string;
    present: boolean;
    age: number;
    chipNumber: string;
    owner: Owner;
}
interface Owner
{
    name: string;
    lastName: string;
    phoneNumber: number;
}

export default async function fetchAllDogs() 
{
    // göra om vår URL
    let url = new URL(API_BASE);

    let response = await fetch(url)
    .catch((e) => console.error(e));



    let dog: Dog;

    let owner: Owner;

    owner = 
    {
        name: "string",
        lastName: "string",
        phoneNumber: 0
    }

    dog =
    {
        name: "string",
        sex: "string",
        breed: "string",
        img: "string",
        present: false,
        age: 0,
        chipNumber: "string",
        owner: owner
    }

    console.log("end");

    let dogs: Dog[] = [];
    dogs[0] = dog;
  
    if(response)
    {
        return response.json();
    }
}