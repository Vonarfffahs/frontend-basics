import React, { useState } from 'react';
import './image.css';

export default function Image() {
  const [isImgAdded, setIsImgAdded] = useState(false);
  const [imgSize, setImgSize] = useState({ width: 450, height: 300 });

  const addImage = () => {
    setIsImgAdded(true);
  };

  const increaseImgSize = () => {
    if (isImgAdded) {
      setImgSize((prevSize) => ({
        width: prevSize.width * 2,
        height: prevSize.height * 2,
      }));
    }
  };

  const decreaseImgSize = () => {
    if (isImgAdded) {
      setImgSize((prevSize) => ({
        width: prevSize.width / 2,
        height: prevSize.height / 2,
      }));
    }
  };

  const deleteImg = () => {
    setIsImgAdded(false);
    setImgSize({ width: 450, height: 300 });
  };

  return (
    <>
      <a
        href="https://kam-pod.gov.ua/index.php"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://vidviday.ua/storage/media/tour/4342/vipusknii-2.jpg"
          alt="Кам'янець-Подільський"
          width="450"
          height="300"
        />

        {isImgAdded && (
          <img
            src="https://vidviday.ua/storage/media/tour/4342/vipusknii-2.jpg"
            alt="Кам'янець-Подільський"
            width={imgSize.width}
            height={imgSize.height}
          />
        )}
      </a>
      <h2>Дії над зображенням:</h2>
      <div className="btn-wrapper">
        <button id="add-btn" onClick={addImage}>
          Додати
        </button>
        <button id="increase-btn" onClick={increaseImgSize}>
          Збільшити
        </button>
        <button id="decrease-btn" onClick={decreaseImgSize}>
          Зменшити
        </button>
        <button id="delete-btn" onClick={deleteImg}>
          Видалити
        </button>
      </div>
    </>
  );
}
