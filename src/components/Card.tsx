import { IProducts } from "@/types/apiTypes";
import Link from "next/link";
import React from "react";

interface Props {
  item: IProducts;
}

const Card = ({ item }: Props) => {
  const { id, title, image } = item;

  return (
    <div className="card flex flex-col gap-4 w-[23.5%] cursor-pointer">
      <Link href={`/shop-all/${id}`}>
        <div className="content bg-[#EDF2F4] rounded-[10px] p-[44px]">
          <img src={image} alt="" />
        </div> 
        <p className="max-w-[60%]">{title}</p>
      </Link>
    </div>
  );
};

export default Card;
