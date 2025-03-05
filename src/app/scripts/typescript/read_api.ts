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

async function readApi(api: URL)
{
    let apiContent = undefined;

    console.log("nnnn");

    await fetch(api)
    .then((res) => res.text())
    .then((text) => 
    {
        console.log("bbbb");
        apiContent = text;
    })
    .catch((e) => console.error(e));

    console.log("mmmm");

    return apiContent;
}

export default async function fetchAllDogs(): Promise<Dog[]> 
{
    // göra om vår URL
    let url = new URL(API_BASE);
    console.log(url.toString());
    console.log(url);
    
    console.log("1111");
    let response = await readApi(url);
    console.log(response);
 

    /*
    const data: APIData = await response.json();

    if (!Array.isArray(data.results))
    {
        throw new Error("Invalid data format received");
    }

    // https://pokeapi.co/api/v2/pokemon/25/
    // 
    // lägga till ett ID på alla våra pokemon-objekt
    const updatedPokes: BasePoke[] = data.results.map((pokemon) => (
    {
        ...pokemon, // behåller befintliga attribut
        id: Number(pokemon.url.split("/").slice(-2, -1)[0])
    }));

    return updatedPokes;
    */

    console.log(response);

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
  

    return dogs;

}