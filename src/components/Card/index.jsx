const Card = ({
  description,
  type,
  price,
  style,
  setUsers,
  users,
  setFiltered,
  filtered,
}) => {
  function deleted(e) {
    setUsers(
      users.filter(transations => {
        return e.currentTarget.id !== transations.title;
      })
    );

    setFiltered(
      filtered.filter(transations => e.currentTarget.id !== transations.title)
    );
  }

  return (
    <li className="liRenderWallet" style={style}>
      <div className="divFirstLi">
        <h3 className="titleFirstLi">{description}</h3>
        <span className="spanFirstLi">{type}</span>
      </div>
      <div className="divSecondLi">
        <small className="priceSecondLi">U$ {price},00</small>
        <div
          className="btnTrashImage"
          onClick={e => deleted(e)}
          id={description}
        >
          <img src="./trx.png" alt="trash" />
        </div>
      </div>
    </li>
  );
};

export default Card;
