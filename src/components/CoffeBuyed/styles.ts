import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(125, 125, 125, 0.3);
  margin-bottom: 10px;

  button {
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-label']};
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
    width: 40px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .trash-button {
    width: 110px;
    font-size: 16px;
    font-size: 12px;
    display: flex;
    gap: 5px;
    margin: 0 5px 0 5px;
  }

  input {
    background-color: ${(props) => props.theme['base-button']};
    border: none;
    text-align: right;
    appearance: none;
    font-size: 20px;
    font-family: 'Roboto';
    font-weight: 500;
    color: ${(props) => props.theme['base-title']};
    width: 40px;
    height: 30px;
  }

  article {
    padding: 0 20px;

    div {
      display: flex;
      flex-direction: row;
    }
  }

  .imgBuyed {
    width: 50px;
    height: 50px;
    margin-top: 52px;
  }
`
