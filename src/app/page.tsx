"use client";

import { Button } from "@mui/material";
import "../app/App.css";
import Link from "next/link";

export default function Home() {
  return (
    <section className="px-[120px] py-[100px]">
      <main className="flex justify-between items-end mt-[69px]">
        <aside className="lalezar-regular flex flex-col items-start">
          <p className="text-[54px]">Mobile</p>
          <p className="text-[86px] text-[#F42D2D]">Backcover</p>
          <p className="text-[86px] text-[#F42D2D] mb-[30px]">Tempered Glass</p>
          <Link href="/shop-all">
            <Button
              className="lalezar-regular"
              variant="contained"
              sx={{
                backgroundColor: "red",
                borderRadius: "20px",
                padding: "15px 48px",
                textTransform: "none",
                fontSize: "20px",
                ":hover": {
                  backgroundColor: "red",
                },
              }}
            >
              Shop all !
            </Button>
          </Link>
        </aside>
        <aside className="right">
          <img src="/phone.svg" alt="" />
        </aside>
      </main>
    </section>
  );
}
