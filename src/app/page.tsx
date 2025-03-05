"use client"; // This is a client component 👈🏽

import Image from "next/image";
import CroppedDogImage from "./tsx/doggy_pictures_sizing";
import { useEffect, useState } from 'react';
import Link from "next/link";
import ClickOnButton from "./tsx/buttonTest";

export default function Home() 
{
  return (
    <div className="all_encompasing_element">
      <div className="program_encompasing_element">
        <header>
        </header>
        <main>
          <Link href="/doggs">OUR DOGS</Link>
          <ClickOnButton />
        </main>
        <footer>
          <CroppedDogImage />
        </footer>
      </div>
    </div>
  );
}
