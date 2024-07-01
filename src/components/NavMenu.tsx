"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../app/App.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import SearchPopUp from "./SearchPopUp";
import { ISearch } from "@/types/apiTypes";

const NavMenu = () => {
  const pathname = usePathname();

  const [search, setSearch] = useState<ISearch>({ value: "", status: false });

  const handleLinkClick = (): void => {
    setSearch({ value: "", status: false });
  };

  return (
    <nav>
      <ul className="flex justify-between items-center">
        <aside className="left flex items-center justify-between w-[30%]">
          <li>
            <Link
              className={`link ${pathname === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`link ${
                pathname === "/shop-all" || pathname.startsWith("/shop-all")
                  ? "active"
                  : ""
              }`}
              href="/shop-all"
            >
              Shop All
            </Link>
          </li>
          <li>
            <Link
              className={`link ${pathname === "/blog" ? "active" : ""}`}
              href="/blog"
            >
              Blog
            </Link>
          </li>
        </aside>
        <li className="flex justify-center w-[45%]">
          <Link href="/">
            <img src="/logo.svg" alt="" />
          </Link>
        </li>
        <aside className="right flex items-center justify-end gap-20 w-[50%]">
          <li>
            <Link
              className={`link ${pathname === "/about-us" ? "active" : ""}`}
              href="/about-us"
            >
              About us
            </Link>
          </li>
          <li className="relative w-[45%]">
            <fieldset className="bg-[#EDF2F4] flex justify-between rounded-xl overflow-hidden py-[6px] px-[20px]">
              <input
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch({
                    value: event.target.value,
                    status: event.target.value !== "",
                  })
                }
                value={search.value}
                type="text"
                placeholder="Search Product"
                className=" outline-none bg-[transparent] placeholder-[#00000080] w-full"
              />
              <IconButton sx={{ padding: "0px" }}>
                <SearchIcon />
              </IconButton>
              <SearchPopUp search={search} handleLinkClick={handleLinkClick} />
            </fieldset>
          </li>
        </aside>
      </ul>
    </nav>
  );
};

export default NavMenu;
