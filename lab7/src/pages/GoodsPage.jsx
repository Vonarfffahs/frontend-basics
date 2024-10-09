import React from 'react';
import GoodsCard from '../components/goodsCard/GoodsCard';
import './style.css';

export default function GoodsPage() {
  return (
    <div id="content">
      <div className="cards-wrapper">
        <GoodsCard
          imgSrc="https://static.vecteezy.com/system/resources/previews/023/254/633/original/delicious-hamburger-isolated-on-transparent-background-png.png"
          name="hamburger"
          cost="$4.99"
        />
        <GoodsCard
          imgSrc="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-3d-illustration-cheese-burger-png-image_10245728.png"
          name="cheeseburger"
          cost="$4.99"
        />
        <GoodsCard
          imgSrc="https://static.vecteezy.com/system/resources/previews/036/290/866/non_2x/ai-generated-french-fries-with-dipping-sauce-on-a-transparent-background-ai-png.png"
          name="french fries"
          cost="$2.99"
        />
        <GoodsCard
          imgSrc="https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16201.jpg?t=st=1728491612~exp=1728495212~hmac=b055049fb24db06957f8be1323301295cef2aa216e9d976d3a8b2d5c8def93cf&w=740"
          name="Coke"
          cost="$2.99"
        />
        <GoodsCard
          imgSrc="https://static.vecteezy.com/system/resources/previews/024/108/126/non_2x/tasty-colorful-ice-cream-cup-with-syrups-and-fruits-on-transparent-background-png.png"
          name="ice cream"
          cost="$3.99"
        />
      </div>
    </div>
  );
}
