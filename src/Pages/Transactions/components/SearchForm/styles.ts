import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    background: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    border-radius: 6px;
    border: 0;
    flex: 1;
    padding: 1rem;
    line-height: 1.4;
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: transparent;
    color: ${({ theme }) => theme["green-300"]};
    border: 1px solid ${({ theme }) => theme["green-300"]};
    border-radius: 6px;
    font-weight: 700;
    line-height: 1.6;
    padding: 0.875rem 2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
      border-color: ${({ theme }) => theme["green-500"]};
    }
  }
`;
