import "./footer.css";

const Rodape = () => {
  return (
    <footer
      className="rodape"
      style={{ backgroundImage: 'url("./imagens/footer/fundo.png")' }}
    >
      <div className="redesSociais">
        <img src="./imagens/footer/fb.png" alt="logo facebook" />
        <img src="./imagens/footer/ig.png" alt="logo instagram" />
        <img src="./imagens/footer/tw.png" alt="logo twitter" />
      </div>
      <img src="./imagens/footer/logo.png" alt="logo organograma" />
      <h5>Desenvolvido por Tullio Silva</h5>
    </footer>
  );
};

export default Rodape;
