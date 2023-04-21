import { useState } from "react";

const ButtonsMain = ({ lists, setFiltered }) => {
  const [check, setCheck] = useState(true);
  const [checkEntry, setEntry] = useState(false);
  const [checkDespes, setDespes] = useState(false);

  function verifyCheck() {
    setCheck(true);
    setEntry(false);
    setDespes(false);
    setFiltered(lists.filter(transations => transations.type));
  }

  function checkedEntry() {
    setEntry(true);
    setCheck(false);
    setDespes(false);
    setFiltered(lists.filter(transations => transations.type === "Entrada"));
  }

  function despessEntry() {
    setDespes(true);
    setCheck(false);
    setEntry(false);
    setFiltered(lists.filter(transations => transations.type === "Saída"));
  }

  return (
    <>
      <div className="buttonsMain">
        {check ? (
          <button className="allButtons check" onClick={verifyCheck}>
            Todos
          </button>
        ) : (
          <button className="allButtons" onClick={verifyCheck}>
            Todos
          </button>
        )}

        {checkEntry ? (
          <button className="entryButtons check" onClick={checkedEntry}>
            Entradas
          </button>
        ) : (
          <button className="entryButtons" onClick={checkedEntry}>
            Entradas
          </button>
        )}

        {checkDespes ? (
          <button className="exitButtons check" onClick={despessEntry}>
            Despesas
          </button>
        ) : (
          <button className="exitButtons" onClick={despessEntry}>
            Despesas
          </button>
        )}
      </div>
    </>
  );
};

export default ButtonsMain;
