import "./time.css";

const Time = (props) => {
  const css = { backgroundColor: props.corSecundaria };
  const borderCss = { borderColor: props.corPrimaria };
  return (
    <section className="time" style={css}>
      <h3 style={borderCss}>{props.nome}</h3>
    </section>
  );
};
export default Time;
