"use client";

import React, { useEffect, useState } from "react";

import { getData } from "@/api/mainApi";

import Card from "@/components/Card";

import { IProducts } from "@/types/apiTypes";

const ShopAll = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const handlePromise = async (): Promise<void> => {
    const promise = await getData();
    setProducts(promise);
  };

  useEffect(() => {
    handlePromise();
  }, []);

  return (
    <main className="px-[120px] py-[100px]">
      <h1 className="text-[32px] font-bold mb-[62px]">Shop All Products</h1>
      <div className="wrapper-posts flex justify-between items-start gap-2 flex-wrap">
        {products.map((e) => {
          return <Card key={e.id} item={e} />
        })}
      </div>
    </main>
  );
};

export default ShopAll;
