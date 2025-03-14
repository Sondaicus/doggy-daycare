

import DogCardObject from "../tsx/doggs_card_column_object";
import {ListPageLogo} from "../tsx/logos";
import {ButtonSearch , ButtonFilter} from "../tsx/menu_buttons";
import {MaximiseDistanceWidth , MaximiseDistanceHeight} from "../tsx/distance_maximising_elements";
import DogCardColumnObject from "../tsx/doggs_card_column_object";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass , faFilter} from '@fortawesome/free-solid-svg-icons'
import fetchAllDogs from "../scripts/typescript/read_api";
import Dog from "../scripts/typescript/dog_interface";
import { DogCardColumnHolder } from "../tsx/dogs_card_column_encompasing_element";

export default async function DogsPage() 
{


  const dogs: Dog[] = await fetchAllDogs();
  

  console.log(dogs);

  return (
    <div className="all_encompasing-element">
      <div className="program_encompasing-element" data-page_type="list">
        <div className="page_encompasing-element" data-page_type="list">
          <header>
            <ListPageLogo />
            <div className="dog-list-page_header-buttons_encompasing-element">
              <ButtonSearch />
              <MaximiseDistanceWidth maxDistance_parameter={268} />
              <ButtonFilter />
            </div>
          </header>
          <main className="dog-list-page_main-content_encompasing-element">
            {dogs && dogs.map((dog, i) => <DogCardColumnObject key={i} dog_object={dog} />)}
          </main>
          <footer>
          </footer>
        </div>
      </div>
    </div>
  );

}