import { Container, Links } from "./style.js"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {


  return (
    <Container>
      <Header />
      <Section title="Links uteis">
        <Links>
          <li><a href="">abacate</a></li>
          <li><a href="">abacate 2</a></li>

        </Links>
      </Section>
      <Section title="Marcadores">
          <Tag title="express"/>
          <Tag title="node"/>
      </Section>
      <Button title="voltar"></Button>
    </Container>
  )
}


