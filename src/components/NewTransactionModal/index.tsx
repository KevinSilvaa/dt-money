// Styling Imports
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from "./styles";

// Strategic Imports
import * as Dialog from "@radix-ui/react-dialog";

// Icons Imports
import { X, ArrowCircleUp, ArrowCircleDown } from "phosphor-react";

export function NewTransactionModal() {

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
  
        <CloseButton>
          <X size={24} />
        </CloseButton>


        <form action="">
          <input
            type="text"
            placeholder="Descrição"
            required
          />

          <input
            type="number"
            placeholder="Preço"
            required
          />

          <input
            type="text"
            placeholder="Categoria"
            required
          />

          <TransactionType>
            <TransactionTypeButton 
              variant="income"
              value="income"
            >
              <ArrowCircleUp size={24} />
              <span>Entrada</span>
            </TransactionTypeButton>

            <TransactionTypeButton 
              variant="outcome"
              value="outcome"
            >
              <ArrowCircleDown size={24} />
              <span>Saída</span>
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}