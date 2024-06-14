import CampoTexto from "../CampoTexto";
import "./form.css";

const Formu = () => {
  return (
    <section className="formulario-container">
        <form className="formulario">
          <h2 className="titulo-form">
            Preencha os dados para criar o card do colaborador.
          </h2>
          <CampoTexto label="Nome" placeholder="Digite seu nome" />
          <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
          <CampoTexto
            label="Imagem"
            placeholder="Digite o endereço da sua imagem"
          />
        </form>
    </section>
  );
};

export default Formu;
