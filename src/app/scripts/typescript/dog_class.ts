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
        this.setName(dog_object.name);
        this.setSex(dog_object.sex)
        this.setBreed(dog_object.breed);
        this.setImg(dog_object.img)
        this.setPresent(dog_object.present)
        this.setAge(dog_object.age)
        this.setChipNumber(dog_object.chipNumber)
        this.setOwner(dog_object.owner)

        /*
        this.name = dog_object.name;
        this.sex = dog_object.sex;
        this.breed = dog_object.breed;
        this.img = dog_object.img;
        this.present = dog_object.present;
        this.age = dog_object.age;
        this.chipNumber = dog_object.chipNumber;
        this.owner = dog_object.owner;
        */
    }

    setName(name: string)
    {
        this.name = name;
    }
    setSex(sex: string)
    {
        this.sex = sex;
    }
    setBreed(breed: string)
    {
        this.breed = breed;
    }
    setImg(img: string)
    {
        this.img = img;
    }
    setPresent(present: boolean)
    {
        this.present = present;
    }
    setAge(age: number)
    {
        this.age = age;
    }
    setChipNumber(chipNumber: string)
    {
        this.chipNumber = chipNumber;
    }
    setOwner(owner: Owner)
    {
        this.owner = owner;
    }

    getName()
    {
        return this.name as string;
    }
    getSex()
    {
        return this.sex as string;
    }
    getBreed()
    {
        return this.breed as string;
    }
    getImg()
    {
        return this.img as string;
    }
    getPresent()
    {
        return this.present as boolean;
    }
    getAge()
    {
        return this.age as number;
    }
    getChipNumber()
    {
        return this.chipNumber as string;
    }
    getOwner()
    {
        return this.owner as Owner;
    }
}

export class Owner
{
    name: string;
    lastName: string;
    phoneNumber: string;
    
    constructor(owner_object)
    {
        this.setName(owner_object.name);
        this.setLastName(owner_object.lastName);
        this.setPhoneNumber(owner_object.phoneNumber);
        
        /*
        this.name = owner_object.name;
        this.lastName = owner_object.lastName;
        this.phoneNumber = owner_object.phoneNumber;
        */
    }

    setName(name: string)
    {
        this.name = name;
    }
    setLastName(lastName: string)
    {
        this.lastName = lastName;
    }
    setPhoneNumber(phoneNumber: string)
    {
        this.phoneNumber = phoneNumber;
    }

    getName()
    {
        return this.name as string;
    }
    getLastName()
    {
        return this.lastName as string;
    }
    getPhoneNumber()
    {
        return this.phoneNumber as string;
    }
}