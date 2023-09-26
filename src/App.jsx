import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import validarEntrada from "./utils/automata";
import AutomataIMG from "./assets/automata.jpg";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isValueValid, setIsValueValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, setState] = useState(0);
  const [recorrido, setRecorrido] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setIsSubmitted(true);
    const isValid = validarEntrada(inputValue);


    if (isValid.esValido) {
      setIsValueValid(true);
      setState(isValid.estado);
      setRecorrido(isValid.recorrido);
    } else {
      setIsValueValid(false);
      setState(isValid.estado);
      setRecorrido(isValid.recorrido);
    }

    console.log(isValid, "2");
  };

  const renderMessage = () => {
    if (isValueValid) {
      return <p className="text-green-500">Entrada válida</p>;
    }

    return (
      <p className="text-red-500">Entrada inválida, llego hasta q{state}</p>
    );
  };

  const renderRecorrido = () => {
      return (
        <>
          <p className="text-blue-500">Recorrido</p>
          <p className="text-blue-500">{recorrido}</p>
        </>
      );
    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Autómatas</h1>
      <img src={AutomataIMG} alt="automata" />
      <div className="flex justify-center items-center ">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Escribe algo..."
        />
        <Button onClick={handleButtonClick} label="Verificar" />
      </div>
      {isSubmitted && [renderMessage(), renderRecorrido()]}
    </div>
  );
}

export default App;
