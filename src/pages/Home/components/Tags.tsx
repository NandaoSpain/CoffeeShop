import { Container } from './styles'

interface TagItensContainer {
  icon: React.ComponentType<any>
  text: string
  className: string
}

export function TagItem({ icon: Icon, text, className }: TagItensContainer) {
  return (
    <Container className={className}>
      <Icon />
      <p>{text}</p>
    </Container>
  )
}
