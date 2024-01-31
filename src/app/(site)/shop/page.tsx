import React from "react";
import { Image } from "@nextui-org/react";
import MailToEmail from "@/components/resources/MailToEmail";
import { Product } from "@/constants/data.types";
import ProductDisplay from "@/components/shop/ProductDisplay";

const PRODUCTS: Product[] = [
    {
        imageUrl: "/products/t-shirt.jpeg",
        name: "IWVYS T-Shirt",
        cashPrice: 25,
        ePrice: 26,
        sizeRange: "Adult Small - 2XL",
    },
];

const ShopPage = () => {
    return (
        <div className="flex flex-col gap-4 min-h-[80vh] h-full w-full">
            <div id="shop_header" className="mb-12">
                <h1 id="title" className="text-2xl font-light text-center">
                    IWVYS Shop
                </h1>
                <p id="subtitle">
                    Merch is now available for purchase. If you are interested in
                    purchasing, email{" "}
                    <MailToEmail email="marketing@iwvys.com" target="_blank" /> to arrange
                    payment and delivery.
                </p>
            </div>
            <div
                id="shop_products"
                className="grid md:grid-cols-2 grid-cols-1 self-center md:self-start"
            >
                {PRODUCTS.map((product, index) => (
                    <ProductDisplay
                        key={`${product.name}-${product.cashPrice}`}
                        {...product}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
