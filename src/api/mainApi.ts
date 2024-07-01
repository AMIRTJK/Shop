import { IProducts } from "@/types/apiTypes";

export const getData = async (): Promise<IProducts[]> => {
  try {
    const response: Response = await fetch(process.env.NEXT_PUBLIC_PRODUCTS!);
    const data: IProducts[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProductById = async (
  id: string | number
): Promise<IProducts | null> => {
  try {
    const response: Response = await fetch(
      `${process.env.NEXT_PUBLIC_PRODUCTS!}/${id}`
    );
    const data: IProducts = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
