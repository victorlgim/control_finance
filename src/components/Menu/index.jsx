import "./index.css";

const Menu = ({ setState }) => {
  return (
    <div className="divMenu">
      <h1 className="title">
        <strong className="pink-title">F </strong>inity
      </h1>
      <p className="description">Centralize o controle das suas finanças</p>
      <small className="small">de forma rápida e segura</small>
      <button className="button-initial" onClick={() => setState(true)}>
        Iniciar
      </button>
    </div>
  );
};

export default Menu;
