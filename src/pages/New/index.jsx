import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import  {api} from "../../services/api";
import { Container, Form } from "./style";
import { useNavigate } from "react-router-dom";
export function New() {
const [title, setTtile] = useState("");
const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();
  function handleAddLink() {
    setLinks((prev) => [...prev, newLink]);
    setNewLink("");
  }
  function handleRemoveLink(del) {
    setLinks((prevState) => prevState.filter((link) => link !== del));
  }
  function handleAddTag(){
    setTags((prev)=> [...prev, newTag])
    setNewTag("")
  }
  function removeTag(del){
    setTags((prevState)=> prevState.filter((tag)=> tag !== del))
  }
  async function handleNewNote(){
    // verificar se os campos estão preenchidos
    if(title === "" || description === ""){
        alert("Preencha todos os campos")
        return
    }
    // verificar se links e tags estão preenchidos
    if(links.length === 0 || tags.length === 0){
        alert("Preencha todos os campos")
        return
    }
    await api.post("/notes", { 
            title,  
            description,
            links,
            tags

    })
    alert("Nota criada com sucesso")
    navigate("/")
  }
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/"> voltar</Link>
          </header>
          <Input 
          placeholder="Titulo"
          onChange={(e) => setTtile(e.target.value)}
          />
          <TextArea 
          placeholder="Observacoes"
            onChange={(e) => setDescription(e.target.value)}
          
          />

          <Section title="Links uteis">
            {links.map((link, index) => {
              return (
                <NoteItem
                  placeholder="Novo link"
                  value={link.toString()}
                  key={index.toString()}
                  onClick={() => handleRemoveLink(link)}
                />
              );
            })}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => {
                return (
                    <NoteItem 
                    value ={tag.toString()}
                    key ={index.toString()}
                    onClick={() => removeTag(tag)}
                    />
                );
              })}

              <NoteItem 
              isNew 
              placeholder="Nova tag"
              value={newTag}
              onChange={(e)=> setNewTag(e.target.value)}
              onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
