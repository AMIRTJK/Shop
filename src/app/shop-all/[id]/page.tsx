"use client";

import React, { useState, useEffect } from "react";

import { getProductById } from "@/api/mainApi";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IProducts } from "@/types/apiTypes";

interface Props {
  params: {
    id: "string";
  };
}

const SingleItem = ({ params }: Props) => {
  const [products, setProducts] = useState<IProducts | null>(null);

  const handlePromise = async (): Promise<void> => {
    const promise = await getProductById(params.id);
    setProducts(promise);
  };

  const router = useRouter();

  useEffect(() => {
    handlePromise();
  }, []);

  return (
    <main className="px-[120px] py-[100px]">
      <Button
        onClick={() => router.push("/shop-all")}
        variant="text"
        sx={{
          textTransform: "none",
          textDecoration: "none",
          marginBottom: "30px",
          color: "#64696a",
        }}
      >
        Назад
      </Button>
      <h1 className="text-[32px] font-bold mb-[62px]">Shop Item</h1>
      <div className="wrapper-post flex justify-between gap-20 px-[35px]">
        <div className="wrapper-image flex justify-between items-center p-[55px] bg-[#EDF2F4] w-[35%] rounded-[20px]">
          <img src={products?.image} alt="" className="w-[100%]" />
        </div>
        <div className="wrapper-info w-[65%] flex flex-col justify-between">
          <h2 className="text-[24px] font-semibold">{products?.title}</h2>
          <div className="parameters">
            <p>Item 20 LKR 599</p>
            <p>Item 50 LKR 549</p>
            <p>Item 100 LKR 449</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
          </p>
          <p>Contact us: 072 706 6455 | 071 789 9466</p>
        </div>
      </div>
    </main>
  );
};

export default SingleItem;
