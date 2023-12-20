import React from "react";
import { Image } from "@nextui-org/react";

interface ProductDisplayProps {
  imageUrl: string;
  name: string;
  cashPrice: number;
  ePrice: number;
  sizeRange: string;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  imageUrl,
  name,
  cashPrice,
  ePrice,
  sizeRange,
}) => {
  return (
    <div id={`product-${name}-${cashPrice}`} className="flex flex-col">
      <div id="image">
        <Image src={imageUrl} alt={name} width={350} />
      </div>
      <div id="subtext">
        <div id="price">
          <p>Price: </p>
          <p>{`$${cashPrice} (Cash/Check) or $${ePrice} (Venmo / Square)`}</p>
        </div>
        <div id="sizes">
          <p>Sizes: </p>
          <p>{sizeRange}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
