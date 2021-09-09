import { useTransactions } from "../../hooks/useTranscations";

import { Container } from "./styles";

export function TransactionTable() {
  const { transactions } = useTransactions();

  console.log(transactions)

  return (
    <Container >
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions && transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.type === 'withdraw'
                  ? -transaction.amount
                  : transaction.amount
                )}
              </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR', {
                dateStyle: 'medium',
              }).format(new Date(transaction.createdAt))}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container >
  );
}