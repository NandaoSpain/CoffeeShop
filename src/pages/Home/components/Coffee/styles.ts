import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 256px;
  height: 310px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;

  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  aside {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -32px;

    p {
      color: ${(props) => props.theme['yellow-dark']};
      font-family: 'Roboto', sans-serif;
      font-size: 10px;
      background-color: ${(props) => props.theme['yellow-light']};
      padding: 6px 12px;
      border-radius: 16px;
      margin: 8px;
    }

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 20px;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      color: ${(props) => props.theme['base-label']};
    }
  }


`
