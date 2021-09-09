import { useTransactions } from '../../hooks/useTranscations';

import { Container } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary() {
  const { transactions } = useTransactions();

  const sumarry = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.income += transaction.amount
      acc.total += transaction.amount
      return acc
    } else {
      acc.outcome += transaction.amount
      acc.total -= transaction.amount
      return acc
    }
  }, {
    income: 0,
    outcome: 0,
    total: 0
  });



  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(sumarry.income)}</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>-{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(sumarry.outcome)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(sumarry.total)}</strong>
      </div>
    </Container>
  );
}