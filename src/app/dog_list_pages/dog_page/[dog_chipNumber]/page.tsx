import { fetchDogByChipNumber , fetchDogNumbers , fetchThisDogsNumber , fetchNextDogsChipNumber , fetchPreviousDogsChipNumber , fetchFirstDogsChipNumber , fetchLastDogsChipNumber } from "@/app/scripts/typescript/read_api";
import {Dog} from "@/app/scripts/typescript/dog_interface";
import Image from "next/image";
import {MaximiseDistanceWidth} from "@/app/tsx/distance_maximising_elements";
import DogPresentToggleButton from "@/app/tsx/dog_present_toggle_button";
import DogPageInfoField from "@/app/tsx/dog_page_info_field";
import DogDynamicRouteListed from "@/app/tsx/other-dog-route-link";
import DogNumberInList from "@/app/tsx/dog-number-in-list";

export default async function IndividualDogPage({ params }: { params: Promise<{ dog_chipNumber: string }> }) 
{
    let { dog_chipNumber } = await params;
    let this_dogs: Dog[] = await fetchDogByChipNumber(dog_chipNumber);
    let this_dog = this_dogs[0];
    let this_dogs_chipnumber = this_dog.chipNumber;
    let dog_numbers = await fetchDogNumbers();
    let this_dogs_number = await fetchThisDogsNumber(this_dog);
    let next_dogs_chipNumber = await fetchNextDogsChipNumber(this_dog);
    let previous_dogs_chipNumber = await fetchPreviousDogsChipNumber(this_dog);
    let first_dogs_chipNumber = await fetchFirstDogsChipNumber();
    let last_dogs_chipNumber = await fetchLastDogsChipNumber();

    if(this_dogs_chipnumber == first_dogs_chipNumber)
    {
        first_dogs_chipNumber = "FALSE";
    }
    if(this_dogs_chipnumber == last_dogs_chipNumber)
    {
        last_dogs_chipNumber = "FALSE";
    }

    let paramsCompiled_start = [first_dogs_chipNumber, -2];
    let paramsCompiled_previous = [previous_dogs_chipNumber, -1];
    let paramsCompiled_next = [next_dogs_chipNumber, 1];
    let paramsCompiled_last = [last_dogs_chipNumber, 2];
    let paramsCompiled_showIndex = [this_dogs_number, dog_numbers];

    return (
        <div className="all_encompasing-element">
            <div className="program_encompasing-element">
                <div className="dog_page_ecompasing-element">
                    <header>
                        <Image className="dog_page_image" unoptimized={true} src={this_dog.img} width={390} height={322} alt="390*322" />
                    </header>
                    <main>
                        <section className="dog_page_main_name-present_ecompasing-element">
                            <div className="dog_page_main_content-ecompasing-element">
                                <section className="dog_page_name-present_ecompasing-element">
                                    <p className="dog_page_name-element">{this_dog.name}</p>
                                    <MaximiseDistanceWidth maxDistance_parameter={358} />
                                    <DogPresentToggleButton dog_object={this_dog} />
                                </section>
                            </div>
                        </section>
                        <section className="dog_page_main_info_ecompasing-element">
                            <section className="dog_page_main_info_content-ecompasing-element">
                                <DogPageInfoField dog_object_value={this_dog.name} title_value={"Name:"} />
                                <DogPageInfoField dog_object_value={this_dog.breed} title_value={"Breed:"} />
                                <DogPageInfoField dog_object_value={this_dog.age} title_value={"Age:"} />
                            </section>
                            <section className="dog_page_main_info_content-ecompasing-element">
                                <DogPageInfoField dog_object_value={this_dog.owner.name + " " + this_dog.owner.lastName} title_value={"Owner:"} />
                                <DogPageInfoField dog_object_value={this_dog.owner.phoneNumber} title_value={"Phone:"} />
                            </section>
                        </section>
                    </main>
                    <footer>
                        <DogDynamicRouteListed paramsCompiled={paramsCompiled_start} />
                        <DogDynamicRouteListed paramsCompiled={paramsCompiled_previous} />
                        <DogNumberInList paramsCompiled={paramsCompiled_showIndex} />
                        <DogDynamicRouteListed paramsCompiled={paramsCompiled_next} />
                        <DogDynamicRouteListed paramsCompiled={paramsCompiled_last} />
                    </footer>
                </div>
            </div>
        </div>
    );
}