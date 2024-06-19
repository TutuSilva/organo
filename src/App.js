import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formu from "./componentes/form";

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  };
  return (
    <div className="App">
      <Banner />
      <Formu aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;
