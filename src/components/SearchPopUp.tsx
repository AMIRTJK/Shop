"use client";

import React, { useState, useEffect } from "react";

import { getData } from "@/api/mainApi";

import Link from "next/link";
import { IProducts } from "@/types/apiTypes";

interface Props {
  search: {
    value: string;
    status: boolean;
  };
  handleLinkClick: () => void;
}

const SearchPopUp = ({ search, handleLinkClick }: Props) => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const handlePromise = async (): Promise<void> => {
    const promise = await getData();
    setProducts(promise);
  };

  useEffect(() => {
    handlePromise();
  }, []);

  return (
    <div className="show-searched absolute top-[130%]  rounded-lg right-0 bg-[#fff] border-[1px] shadow-lg z-10">
      <ul className="wrapper-list">
        {search.status &&
          search.value.length > 0 &&
          products.map((e) => {
            if (e.title.toLowerCase().includes(search.value.toLowerCase())) {
              return (
                <Link
                  onClick={handleLinkClick}
                  key={e.id}
                  href={`/shop-all/${e.id}`}
                >
                  <li className="hover:bg-[#EDF2F4] cursor-pointer px-[20px] py-[5px]">
                    {e.title}
                  </li>
                </Link>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default SearchPopUp;
