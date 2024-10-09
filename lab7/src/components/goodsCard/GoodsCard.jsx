import React from 'react';
import './goodsCard.css';

export default function GoodsCard({ imgSrc, name, cost }) {
  return (
    <div id="goods-card">
      <div className="image">
        <img src={imgSrc} alt={name} width="300" height="300" />
      </div>
      <div className="caption">
        <p className="product-name">{name}</p>
        <p className="product-cost">{cost}</p>
      </div>
    </div>
  );
}
