import { useState } from "react";
import "./App.css";
import { Cadastro } from "./components/Form";
import { Lista } from "./components/List";
import { DinheiroTotal } from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filterTransactions, setfilterTransactions] = useState([]);

  function filterByType(listTransactions, type) {
    const transacoes = listTransactions.filter((item) => item.tipo === type);
    setfilterTransactions(transacoes);
  }
  function mudarTela() {
    const tela1 = document.getElementById("tela1");
    const tela2 = document.getElementById("tela2");

    tela1.classList.toggle("hidden");
    tela2.classList.toggle("hidden");
  }
  function removerItem(itemRemover) {
    const itemRemovido = listTransactions.filter(
      (lista) => lista !== itemRemover
    );
    setListTransactions(itemRemovido);
  }

  return (
    <div className="App">
      <div id="tela1" className="">
        <div className="inicio">
          <div className="box__1">
            <div>
              <h2 className="h2P">Nu</h2>
              <h2 className="h3P">Kenzie</h2>
            </div>
            <h1>Centralize o controle das suas finanças</h1>
            <span>De forma rápida e segura</span>
            <button onClick={() => mudarTela()}>Iniciar</button>
          </div>
          <div className="box__2">
            <div className="circulo3">
              <div className="circulo2">
                <div className="circulo1"></div>
              </div>
            </div>
          </div>
          <div className="box__3pai">
            <div className="box__3">
              <div className="potinhos">
                <div className="c1"></div>
                <div className="c2"></div>
                <div className="c3"></div>
              </div>
              <input className="input__exib" type="text" />
              <input className="input__exib" type="text" />
              <input className="input__exib" type="text" />
              <input className="input__exib" type="text" />
              <input className="input__exib" type="text" />
              <input className="input__exib" type="text" />
              <div className="abs__1">
                <div className="cx1">
                  <div className="cx2"></div>
                  <div className="cx3"></div>
                </div>
                <div className="cx__p">
                  <p className="p11"></p>
                  <p className="p22"></p>
                </div>
              </div>
              <div className="abs__2">
                <div className="cx4">
                  <div className="cx5"></div>
                  <div className="cx6"></div>
                </div>
                <div className="cx__p">
                  <p className="p33"></p>
                  <p className="p44"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tela2" className="container hidden">
        <header className="cabecalho">
          <div className="container__logo">
            <div className="logo">
              <h1 className="h1__logo">Nu</h1>
              <h1>Kenzie</h1>
            </div>
            <div>
              <button className="btn__inicio" onClick={() => mudarTela()}>
                Inicio
              </button>
            </div>
          </div>
        </header>
        <section>
          <div className="div1">
            <Cadastro setListTransactions={setListTransactions} />
            <DinheiroTotal listTransactions={listTransactions} />
          </div>
          <div className="div2">
            <div className="div__botoes">
              <p>Resumo Financeiro</p>
              <div>
                <button
                  className="btn1"
                  onClick={() => setfilterTransactions(listTransactions)}
                >
                  Todas
                </button>
                <button
                  className="btn"
                  onClick={() => filterByType(listTransactions, "Entrada")}
                >
                  Entradas
                </button>

                <button
                  className="btn"
                  onClick={() => filterByType(listTransactions, "Saida")}
                >
                  Saida
                </button>
              </div>
            </div>
            {filterTransactions.length > 0 ? (
              <Lista
                listTransactions={filterTransactions}
                removerItem={removerItem}
              />
            ) : (
              <Lista
                listTransactions={listTransactions}
                removerItem={removerItem}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
