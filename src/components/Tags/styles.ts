import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
`

export const IconContainer = styled.div<{ backgroundColor?: string }>`
  svg {
    fill: ${(props) => props.theme.background};
    background-color: ${(props) => props.backgroundColor || props.theme.purple};
    padding: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`
