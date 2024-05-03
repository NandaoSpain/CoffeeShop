import styled from 'styled-components'

export const Container = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  white-space: nowrap;

  svg {
    background-color: ${(props) => props.backgroundColor || props.theme.purple};
    padding: 6px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`

export const IconContainer = styled.div`
  svg {
    fill: #ffffff; /* Cor do ícone */
  }
`
