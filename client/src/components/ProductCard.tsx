import { Card, Image, Text } from "@Mantine/core";

export function ProductCard(props: any) {
  const product = props.product;

  return (
    //
    <Card bg="white">
      <Card.Section>
        <Image h={200} src={product.imageUrl} alt="product image" />
      </Card.Section>
      <Card.Section>
        <Text fw={500}>{product.name}</Text>
        <Text size="sm" c="dimmed">
          {product.description}
        </Text>
        <Text>${product.price}</Text>
      </Card.Section>
    </Card>
  );
}
