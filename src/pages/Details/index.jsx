import { Container, Links, Content } from "./style.js"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"
import { api } from "../../services/api.js"
export function Details() {
const [data,setData ] = useState();
const params = useParams();
const navigate = useNavigate();
function handleBack(){
    navigate(-1);
}
async function handleRemove(){
  const confirm = window.confirm("Deseja realmente remover este item?");
  if(confirm){
   await api.delete(`/notes/${params.id}`);
    navigate(-1);
  }
}
useEffect(() =>{
  async function fetchNote() {
    const response = await api.get(`/notes/${params.id}`);
    setData(response.data);
  }
  fetchNote();
},[])
  return (
    <Container>
                <Header />
                { data && 
      <main>
        <Content>

          <ButtonText title="Excluir a nota" onClick={handleRemove}/>

          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <Section title="Links uteis">
               { data &&
            <Links>
            {data.links.map((link) => {
            return  <li key={link.id} ><a href={link.url} target="_blank">{link.url}</a></li>})
            }
            </Links>
              }
          </Section>
          { data && 
          <Section title="Marcadores">
            {data.tags.map((tag, key) => {
             return <Tag key={tag.id} title={tag.name} />
            })
            }

          </Section>
   }
          <Button title="voltar" onClick={handleBack}></Button>
        </Content>
      </main>
  }
    </Container>
  )
}


