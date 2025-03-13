"use client";

import Image from "next/image";
import CroppedDogImage from "./tsx/doggy_pictures_sizing";
import Link from "next/link";
import ClickOnButton from "./tsx/buttonTest";
import {StartPageLogo} from "./tsx/logos";

export default function Home() 
{
  return (
    <div className="all_encompasing-element">
      <div className="program_encompasing-element" data-page_type="start">
        <div className="page_encompasing-element" data-page_type="start">
          <header>
            <StartPageLogo />
          </header>
          <main>
            <div className="centralizing_content_encompasing-element">
              <Link className="dog-list-page_link" data-element_style="button" href="/dog_list_pages">OUR DOGS</Link>
            </div>
          </main>
          <footer>
            <CroppedDogImage />
          </footer>
        </div>
      </div>
    </div>
  );
}
