import Header from "../components/Header";
import Wallet from "../components/Input";
import WalletBottom from "../components/Total";
import ButtonsMain from "../components/Buttons";
import NoRender from "../components/NoRender";
import Render from "../components/Card";
import React, { useState } from "react";
import "./userPage.css";

const UserPage = ({ setState }) => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState(users);

  return (
    <>
      <Header setState={setState} />
      <div className="container-principal">
        <div className="container-flex">
          <div className="flex-wallet-full">
            <div className="flex-wallet">
              <Wallet setUsers={setUsers} setFiltered={setFiltered} />
              {users.length ? <WalletBottom list={users} /> : <></>}
            </div>
            <div className="flex-wallet-two">
              <div className="topHeaderMain">
                <div className="headerMain">
                  <h3 className="titleMain">Resumo financeiro</h3>
                </div>
                <ButtonsMain
                  setFiltered={setFiltered}
                  filtered={filtered}
                  lists={users}
                />
              </div>

              {filtered.length ? (
                <>
                  <ul className="ulRenderWallet">
                    {" "}
                    {filtered.map((transation, index) =>
                      transation.type === "Entrada" ? (
                        <Render
                          setUsers={setUsers}
                          setFiltered={setFiltered}
                          filtered={filtered}
                          users={filtered}
                          key={index}
                          style={{
                            borderLeft: "4px solid #03B898",
                            borderRadius: "4px 0px 0px 4px",
                          }}
                          index={index}
                          description={transation.title}
                          type={transation.type}
                          price={transation.value}
                        />
                      ) : (
                        <Render
                          setUsers={setUsers}
                          setFiltered={setFiltered}
                          filtered={filtered}
                          users={filtered}
                          key={index}
                          index={index}
                          description={transation.title}
                          type={transation.type}
                          price={transation.value}
                        />
                      )
                    )}
                  </ul>
                </>
              ) : (
                <NoRender />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
