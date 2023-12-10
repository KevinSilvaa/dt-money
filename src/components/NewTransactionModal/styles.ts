import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 33.45rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: ${({ theme }) => theme["gray-800"]};
  box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.80);
  border-radius: 6px;
  padding: 2.5rem 3rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      background: ${({ theme }) => theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};
      border-radius: 6px;
      border: 0;
      padding: 1rem;
      line-height: 1.4;
      transition: all 0.2s ease-in-out;

      &::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }

    button[type="submit"] {
      padding: 1rem 2rem;
      background: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
      text-align: center;
      border: 0;
      border-radius: 6px;
      font-weight: 700;
      line-height: 1.6;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: 0;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome"
}

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  width: 100%;
  border: 0;
  border-radius: 6px;
  background: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme["gray-300"]};
  line-height: 1.6;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  svg {
    color: ${({ theme, variant }) => variant === "income"
    ?
    theme["green-300"]
    :
    theme["red-300"]
  };
  }

  &[data-state="unchecked"]:hover {
    background: ${({ theme }) => theme["gray-600"]};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme["white"]};
    background: ${({ theme, variant }) => variant === "income"
    ?
    theme["green-700"]
    :
    theme["red-600"]
  };
  
  svg {
    color: ${({ theme }) => theme["white"]};
  }
  }
`;
