export class Dog
{
    name: string;
    sex: string;
    breed: string;
    img: string;
    present: boolean;
    age: number;
    chipNumber: string;
    owner: Owner;

    constructor(dog_object)
    {
        this.name = dog_object.name;
        this.sex = dog_object.sex;
        this.breed = dog_object.breed;
        this.img = dog_object.img;
        this.present = dog_object.present;
        this.age = dog_object.age;
        this.chipNumber = dog_object.chipNumber;
        this.owner = dog_object.owner;
    }
}

export class Owner
{
    name: string;
    lastName: string;
    phoneNumber: string;
    
    constructor(owner_object)
    {
        this.name = owner_object.name;
        this.lastName = owner_object.lastName;
        this.phoneNumber = owner_object.phoneNumber;
    }
}