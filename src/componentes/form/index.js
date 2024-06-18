import CampoTexto from "../CampoTexto";
import "./form.css";
import ListaSuspensa from "./../ListaSuspensa/index";
import Botao from "../Botão";

const Formu = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log("TESTE");
  };
  return (
    <section className="formulario-container">
      <form onSubmit={aoSalvar} className="formulario">
        <h2 className="titulo-form">
          Preencha os dados para criar o card do colaborador.
        </h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
        />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formu;
