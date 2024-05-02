import styled from 'styled-components'

export const Intro = styled.div`
  display: grid;
  width: 80%;
  margin: 0 auto;
  grid-template-areas:
    'title title image'
    'subtitle subtitle image'
    'tags1 tags2 image'
    'tags3 tags4 image';

  .tags1 {
    grid-area: tags1;
  }
  .tags2 {
    grid-area: tags2;
  }
  .tags3 {
    grid-area: tags3;
  }
  .tags4 {
    grid-area: tags4;
  }
`

export const Title = styled.div`
  padding: 20px;
  grid-area: title;
  
`

export const Description = styled.div`
  padding: 20px;
  grid-area: title;
`

export const Titles = styled.div`
  border: none;
`

export const Imagem = styled.div`
  grid-area: image;
`
