// Styling Imports
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

// Icons Imports
import { SummaryContainer, SummaryCard } from "./styles";

export function Summary() {

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp 
            size={32}
          />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      
      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown
            size={32}
          />
        </header>

        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar 
            size={32}
          />
        </header>

        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
