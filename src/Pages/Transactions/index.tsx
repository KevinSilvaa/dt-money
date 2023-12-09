// Styling Imports
import { TransactionsContainer, TransactionsContent, TransactionsHistory, TransactionsTable, PriceHighlight } from "./styles";

// Components Imports
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

export function Transactions() {

  return (
    <TransactionsContainer>
      <Header />

      <TransactionsContent>
        <Summary />

        <TransactionsHistory>
          <SearchForm />

          <TransactionsTable>
            <tbody>
              <tr>
                <td width="50%">Desenvolvimento de site</td>
                <td>
                  <PriceHighlight variant="income">
                    R$ 12.000,00
                  </PriceHighlight>
                </td>
                <td>Venda</td>
                <td>09/12/2023</td>
              </tr>

              <tr>
                <td width="50%">Mercado</td>
                <td>
                  <PriceHighlight variant="outcome">
                    - R$ 59,00
                  </PriceHighlight>
                </td>
                <td>Alimentação</td>
                <td>08/12/2023</td>
              </tr>
            </tbody>
          </TransactionsTable>
        </TransactionsHistory>
      </TransactionsContent>
    </TransactionsContainer>
  );
}
