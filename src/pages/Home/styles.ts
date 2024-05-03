import styled from 'styled-components'

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
  padding: 20px;
  grid-area: title;
  white-space: nowrap;
`

export const Description = styled.div`
  padding: 20px;
  grid-area: subtitle;
  white-space: nowrap;
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

`