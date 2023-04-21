const Header = ({ setState }) => {
  return (
    <header className="header">
      <div className="container-header">
        <div className="flex-header">
          <h1 className="title-header">
            <strong className="strong-class">Nu</strong> Kenzie
          </h1>
          <button className="btn-back" onClick={() => setState(false)}>
            Início
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
