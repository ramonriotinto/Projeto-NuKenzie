import "./style.css";

export const DinheiroTotal = ({ listTransactions }) => {
  const saida = listTransactions.filter((saida) => saida.tipo === "Saida");

  const entrada = listTransactions.filter((saida) => saida.tipo === "Entrada");

  const valorSaida = saida.map((elem) => Number(elem.valor));
  const valorEntrada = entrada.map((elem) => Number(elem.valor));

  const resultado = valorEntrada - valorSaida;

  return (
    <div className="div__total">
      <div className="total">
        <p className="p1">Valor Total:</p>
        <p className="p2">${resultado}</p>
      </div>
      <div>
        <p>Esse valor se refere ao saldo.</p>
      </div>
    </div>
  );
};
