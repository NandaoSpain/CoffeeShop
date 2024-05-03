import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  min-height: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.purple};
`
