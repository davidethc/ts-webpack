import React, { useState } from "react";
import "./../styles/Counter.css";

// Importa las imágenes
import image1 from "/Users/monky02/Desktop/ts-webpack/src/images/image01.png";
import image2 from "/Users/monky02/Desktop/ts-webpack/src/images/image02.png";
import image3 from "/Users/monky02/Desktop/ts-webpack/src/images/image03.png";

interface CounterProps {
  initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue);

  // Lista de imágenes
  const images = [image1, image2, image3];
  const currentImage = images[Math.abs(count) % images.length];

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h1>Contador: {count}</h1>
      <img src={currentImage} alt="Imagen dinámica" className="counter-image" />
      <div>
        <button onClick={increment} className="counter-button">
          Incrementar
        </button>
        <button onClick={decrement} className="counter-button">
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default Counter;
