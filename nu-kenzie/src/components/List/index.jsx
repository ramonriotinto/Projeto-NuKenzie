import "./style.css";

export const Lista = ({ listTransactions, removerItem }) => {
  return (
    <ul className="lista__pai">
      {listTransactions.map((card, index) => (
        <li className="lista" key={index}>
          <div className="mine__container">
            <p>{card.descricao}</p>
            <div>
              <p>R${card.valor}</p>
              <button onClick={() => removerItem(card)}>X</button>
            </div>
          </div>
          <div className="div__span">
            <span>{card.tipo}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
