// Styling Imports
import { TransactionsContainer, TransactionsContent, TransactionsHistory, TransactionsTable, PriceHighlight } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

// Strategic Imports
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter, DateFormatter } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <TransactionsContainer>
      <Header />

      <TransactionsContent>
        <Summary />

        <TransactionsHistory>
          <SearchForm />

          <TransactionsTable>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "-"} {" "}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{DateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              ))
              }
            </tbody>
          </TransactionsTable>
        </TransactionsHistory>
      </TransactionsContent>
    </TransactionsContainer>
  );
}
