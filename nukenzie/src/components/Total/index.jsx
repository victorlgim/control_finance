const WalletBottom = ({ list }) => {
  return (
    <div className="divWalletBottom">
      <div className="divWalletContainerBottom">
        <div className="divColumnBottom">
          <h2 className="title-bottom">Valor total:</h2>
          <p className="description-bottom">O valor se refere ao saldo</p>
        </div>
        <div className="divPriceBottom">
          <span className="priceBottom">
            {list.reduce((a, b) => {
              return b.type === "Entrada" ? b.value * 1 + a : a - b.value * 1;
            }, 0)}
            ,00 $
          </span>
        </div>
      </div>
    </div>
  );
};

export default WalletBottom;
