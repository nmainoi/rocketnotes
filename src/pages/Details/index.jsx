import { Container, Links, Content } from "./style.js"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"

export function Details() {


  return (
    <Container>
                <Header />
      <main>
        <Content>

          <ButtonText title="Excluir a nota" />

          <h1>Introducao ao react</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis doloremque mollitia ut aspernatur aliquid, suscipit, sit eveniet unde ratione delectus veritatis cum molestiae dolorem debitis! Beatae dignissimos non soluta maxime.</p>
          <Section title="Links uteis">
            <Links>
              <li><a href="">abacate</a></li>
              <li><a href="">abacate 2</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>
          <Button title="voltar"></Button>
        </Content>
      </main>
    </Container>
  )
}


