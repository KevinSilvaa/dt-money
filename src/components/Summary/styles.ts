import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
  overflow: auto;
`

interface SummaryCardProps {
  $variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  max-width: 352px;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${({ theme }) => theme['gray-300']};
      line-height: 1.6;
    }
  }

  &:nth-child(1) svg {
    color: ${({ theme }) => theme['green-300']};
  }

  &:nth-child(2) svg {
    color: ${({ theme }) => theme['red-300']};
  }

  &:nth-child(3) svg {
    color: ${({ theme }) => theme.white};
  }

  strong {
    font-size: 2rem;
    line-height: 1.4;
  }

  ${({ $variant }) =>
    $variant === 'green' &&
    css`
      background: ${({ theme }) => theme['green-700']};
    `}
`
