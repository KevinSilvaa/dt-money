// Styling Imports
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

// Components Imports
import { NewTransactionModal } from "../NewTransactionModal";

// Strategic Imports
import * as Dialog from "@radix-ui/react-dialog";

// Image Imports
import logoImg from "../../assets/logo.svg";

export function Header() {

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              Novo Transação
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
