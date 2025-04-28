import React from "react";
import Counter from "./Counter";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        ¡Bienvenido a mi página con React, TypeScript e imágenes!
      </h1>
      <Counter initialValue={0} />
    </div>
  );
};

export default App;
