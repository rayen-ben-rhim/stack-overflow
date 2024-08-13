"use client"

import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface LocalSearchBarProps {
    route: string;
    iconPosition: string;
    imgSrc: string;
    placeholder: string;
    otherClasses: string;
}


const LocalSearchBar = (
    { route, iconPosition, imgSrc, placeholder , otherClasses }: LocalSearchBarProps
) => {


  return (
    <div className="relative flex min-h-[56px] flex-1 flex-wrap gap-2 sm:gap-5">
      <div className={`flex flex-1 items-center gap-2 paragraph-regular no-focus placeholder background-light800_darkgradient border-none text-dark400_light700 px-5 rounded-xl shadow-none outline-none ${otherClasses}`}>
        {iconPosition === "left" && (
          <Image
            src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          
        />
        )}
        <Input
          type="text"
          placeholder={placeholder}
          className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none text-dark-100 dark:text-light-900'
          onChange={() => {}}

        />
        {iconPosition === "right" && (
          <Image
            src="/assets/icons/search.svg"
            alt="search"
            width={24}
            height={24}
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearchBar;
