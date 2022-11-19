import { useState } from "react";
import React from "react";

const Wallet = ({ setUsers, setFiltered }) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState();
  const [type, setType] = useState("");

  function insertMoney(e) {
    e.preventDefault();

    const user = {
      title,
      type,
      value,
    };

    setUsers(oldUsers => [...oldUsers, user]);
    setFiltered(oldFiltered => [...oldFiltered, user]);

    setTitle("");
    setType("");
    setValue("");
  }

  return (
    <div className="divPrincipalWallet">
      <div className="divWallet">
        <div className="containerWallet">
          <form onSubmit={insertMoney} className="formWallet">
            <label htmlFor="descript" className="descript">
              Descrição
            </label>
            <input
              type="text"
              placeholder="Digite aqui sua descrição"
              className="descriptWalletInput"
              onChange={e => setTitle(e.target.value)}
              value={title}
              required
            ></input>
            <small className="smallInput">Ex: Compra de roupas</small>
            <div className="divFullWallet">
              <div className="divValueWallet">
                <label htmlFor="value" className="value">
                  Valor
                </label>
                <input
                  type="number"
                  placeholder="1"
                  className="inputValueWallet"
                  onChange={e => setValue(e.target.value)}
                  required
                  value={value}
                ></input>
                <span className="symbol">U$</span>
              </div>
              <div className="divTypeValueWallet">
                <label htmlFor="typeValue" className="typeValue">
                  Tipo de valor
                </label>
                <select
                  name="entryTypeValue"
                  id="entryTypeValue"
                  class="entryTypeValue"
                  onChange={e => setType(e.target.value)}
                  value={type}
                >
                  <option required hidden>
                    Selecione
                  </option>
                  <option value="Entrada">Entrada</option>
                  <option value="Saída">Saída</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btnInsertValue">
              Inserir valor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
