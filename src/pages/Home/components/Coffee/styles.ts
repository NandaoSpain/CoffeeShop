import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  width: 256px;
  height: 310px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;

  display: flex;
  gap: 32px;
  margin-bottom: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  article {
    display: flex;
    font-family: 'Baloo', sans-serif;
    font-size: 24px;
    color: ${(props) => props.theme['base-text']};

    div {
      display: flex;
    }

    span {
      font-size: 14px;
    }

    input {
      width: 32px;
    }
  }

  button {
    background: ${(props) => props.theme['base-button']};
    border-radius: 8px;
    border: none;
    width: 36px;
    height: 36px;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    cursor: pointer;
  }
`

export const Aside = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -52px;
  min-height: 100px;

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
`

export const Action = styled.div`
  background: ${(props) => props.theme['base-button']};
  border-radius: 8px;

  button {
    border: none;
    width: 32px;
    height: 32px;
    background: ${(props) => props.theme['base-button']};
    border-radius: 8px;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`
export const Input = styled.input`
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  text-align: right;
  appearance: none;
  pointer-events: none;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${(props) => props.theme['base-title']};
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin: 3px;
`
