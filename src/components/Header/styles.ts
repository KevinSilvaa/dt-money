import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 1rem 0 6rem;
`

export const HeaderContent = styled.div`
  max-width: 70rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 1.5rem;
`

export const NewTransactionButton = styled.button`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  border-radius: 6px;
  border: none;
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  line-height: 1.6;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
  }
`
