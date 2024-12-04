import React from "react";
import styled from "styled-components";

const goods = [
  {
    product_name: "Кровать TATRAN",
    product_description:
      "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
    product_price: 120000,
    id: 1,
    url: "/Photos/photo.jpg",
  },
  {
    product_name: "Кресло VILORA",
    product_description:
      "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
    product_price: 21000,
    id: 2,
    url: "/Photos/photo2.jpg",
  },
  {
    product_name: "Стол MENU",
    product_description:
      "Европейский дуб - отличается особой прочностью и стабильностью.",
    product_price: 34000,
    id: 3,
    url: "/Photos/photo3.jpg",
  },
  {
    product_name: "Диван ASKESTA",
    product_description:
      "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
    product_price: 68000,
    id: 4,
    url: "/Photos/photo4.png",
  },
  {
    product_name: "Кресло LUNAR",
    product_description:
      "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
    product_price: 40000,
    id: 5,
    url: "/Photos/photo5.jpg",
  },
  {
    product_name: "Шкаф Nastan",
    product_description:
      "Мебель может быть оснащена разнообразными системами подсветки.",
    product_price: 80000,
    id: 6,
    url: "/Photos/photo6.png",
  },
];

const Container = styled.div`
  width: 100%; 
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box; 
`;


const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const SortButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

const Catalog = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 15px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 15px;
  height: 300px;
`;

const ProductName = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

const App = () => {
  return (
    <Container>
      <Header>
        <Title>Интерьер.</Title>
        <SortButton>Порядок: справа новые ▼</SortButton>
      </Header>
      <Catalog>
        {goods.map((item) => (
          <ProductCard key={item.id}>
            <ProductImage src={item.url} alt={item.product_name} />
            <ProductName>{item.product_name}</ProductName>
            <ProductDescription>{item.product_description}</ProductDescription>
            <ProductPrice>{item.product_price.toLocaleString()} руб.</ProductPrice>
          </ProductCard>
        ))}
      </Catalog>
    </Container>
  );
};

export default App;
