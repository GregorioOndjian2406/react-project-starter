//importamos las librerias correspondientes
import React from "react";
import ReactDOM from "react-dom/client";
//agarramos el componente que esta en el html con id root
const el = document.getElementById("root");
//tomamos control del componente
const root = ReactDOM.createRoot(el);
//creamos un compnente  
function App(){
    const type = "number";
    return <input type={type} min={0} max={10} />;
}
//mostramos el componente en el browser
root.render(<App />);