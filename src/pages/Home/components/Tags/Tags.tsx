import { Container, IconContainer } from './styles'

interface TagItensContainer {
  icon: React.ComponentType<any>
  text: string
  backgroundColor?: string
}

export function TagItem({
  icon: Icon,
  text,
  backgroundColor,
}: TagItensContainer) {
  return (
    <Container>
      <IconContainer>
        <Icon style={{ backgroundColor }} color="white" />
      </IconContainer>
      <p>{text}</p>
    </Container>
  )
}
