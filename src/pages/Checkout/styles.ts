import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-direction: row;
  gap: 32px;
  flex-wrap: wrap;

  h1 {
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 15px;
  }
`

export const Address = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 640px;
  height: 372px;
  border-radius: 6px;
  padding: 40px;

  & > div {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 12px;

    span {
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-text']};
    }
  }

  input#bairro {
    width: 200px;
  }

  input#cidade {
    width: 280px;
  }

  input#uf {
    width: 50px;
  }
  input#cep {
    width: 200px;
  }
  input#numero {
    width: 200px;
  }
  input#complemento {
    width: 338px;
  }
  input#rua {
    width: 546px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 32px;

    input {
      border: 1px solid #e6e5e5;
      background: ${(props) => props.theme['base-input']};
      border-radius: 4px;
      padding: 8px;
      margin: 8px 4px;
      width: 560px;
    }
  }
`

export const Payment = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 640px;
  height: 207px;
  margin-top: 12px;
  border-radius: 6px;
`

export const Bag = styled.div`
  background: ${(props) => props.theme['base-card']};
  width: 448px;
  min-height: 498px;
  border-radius: 6px 44px 6px 44px;
`
