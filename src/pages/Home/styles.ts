import styled from 'styled-components'

export const Presentation = styled.div`
  width: 80%;
  display: flex;
  padding-top: 150px;
  margin: 0 auto;
`

export const Intro = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-columns: 250px 1fr 1fr;
  grid-template-areas:
    'title title image'
    'subtitle subtitle image'
    'tags tags image';
`

export const Title = styled.div`
  grid-area: title;
  white-space: nowrap;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-title']};
    line-height: 1.1;
  }
`

export const Description = styled.div`
  grid-area: subtitle;
  white-space: nowrap;

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Imagem = styled.div`
  grid-area: image;
`

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  grid-area: tags;
`

export const CoffeeList = styled.div`
  display: flex;
  height: 80px;
  width: 80px;
  background: red;
`

export const CoffeeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: red;
`
