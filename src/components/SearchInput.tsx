import { useEffect, useState } from "react";
import SearchButton from "./SearchButton";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Image from "next/image";
import Link from "next/link";
import { EcommerceActions } from "@/store/modules/ecommerce";
import { RootState } from "@/store";
import { Product } from "@/pages/api/product-model";

type SearchInputPropTypes = {
    handleClose: () => void;
};

export default function SearchInput({ handleClose }: SearchInputPropTypes) {
    const [inputValue, setInputValue] = useState("");
    const products = useAppSelector(
        (state: RootState) => state.ecommerce.filteredProductList
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(EcommerceActions.filterByName(inputValue));
    }, [inputValue, dispatch]);

    return (
        <div className="relative flex">
            <input
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Pesquisar"
                className=" appearance-none outline-none w-full mr-3 rounded-xl py-2 px-4 font-light relative bg-gray_scale-50 border-gray_scale-50"
            ></input>
            <SearchButton onClick={handleClose} />
            <div className="absolute z-20 w-[90%] min-h-[30vh] max-h-[20vh] overflow-y-auto overflow-hidden bottom-[-30vh] ">
                {products.map((item: Product) => {
                    return (
                        <div key={`${item.id}`}>
                            <Link
                                href={`/produto/${encodeURIComponent(
                                    item.name
                                )}?id=${item.id}`}
                                className="bg-white px-4 py-4 flex gap-2 cursor-pointer hover:bg-gray_scale-50"
                            >
                                <Image
                                    width={40}
                                    height={40}
                                    src={`/images/products/${item.imageUrl}`}
                                    alt={`${item.name}-image`}
                                />
                                <h1>{item.name}</h1>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
