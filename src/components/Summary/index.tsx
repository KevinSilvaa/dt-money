// Styling Imports
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

// Strategic Imports
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

// Icons Imports
import { SummaryContainer, SummaryCard } from "./styles";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp
            size={32}
          />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown
            size={32}
          />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard $variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar
            size={32}
          />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
