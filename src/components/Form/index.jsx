import "./style.css";
import { useState } from "react";

export const Cadastro = ({ setListTransactions }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState();
  const [tipo, setTipo] = useState("");

  function criarObjeto() {
    setListTransactions((objetoAnterior) => [
      ...objetoAnterior,
      { descricao, valor, tipo },
    ]);
  }

  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="">Descrição</label>
      <input
        className="input__text"
        type="text"
        placeholder="Digite a descrição"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
      />
      <div>
        <div className="div__form2">
          <label htmlFor="">Valor</label>
          <input
            className="input__div"
            type="number"
            placeholder="Ex:1500"
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
        </div>
        <div className="div__form2">
          <label htmlFor="">Tipo de valor</label>
          <select
            className="input__div"
            name=""
            id=""
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
          >
            <option value="">------</option>
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saida</option>
          </select>
        </div>
      </div>
      <button type="submit" onClick={criarObjeto}>
        Enviar
      </button>
    </form>
  );
};
