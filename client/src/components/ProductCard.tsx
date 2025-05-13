import { useState } from "react";
import { Card, Image, Text } from "@Mantine/core";

export function ProductCard(props: any) {
  interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    imageUrl: string;
    category: string;
  }
  const product = props.product;

  return (
    //
    <Card>
      <Card.Section>
        <Image src={product.imageUrl} alt="product image" />
      </Card.Section>
      <Card.Section>
        <Text>{product.name}</Text>
        <Text>
          {product.description}
          {product.price}
        </Text>
      </Card.Section>
    </Card>
  );
}
