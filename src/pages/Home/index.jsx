import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { useState, useEffect } from 'react';
import { api } from '../../services/api';



export function Home() {
    const [tags,setTags] = useState([]);
    const [search,setSearch] = useState('');
    const [tagsSelected,setTagsSelected] = useState([]);
    const [notes,setNotes] = useState([]);
    const navigate = useNavigate();
    function handleSelectTag(tagName){
        if(tagName == "all"){
            console.log("entrou", tagName)
            return setTagsSelected([]);
        }
        const alreadySelected = tagsSelected.includes(tagName);
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);
        } else setTagsSelected((prev)=> [...prev,tagName]);
    }
    function handleDetails(id){ 
        navigate(`/details/${id}`);
    }
    useEffect(() => {

        async function getTags(){
            const response = await api.get("/tags");
 
            setTags(response.data)
        }
        getTags()
    }, []);

    useEffect(() => {

        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }
        fetchNotes()
    }, [tagsSelected,search]);
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText 
                title="Todos" 
                onClick = {() => handleSelectTag("all")}
                isActive = {tagsSelected.length == 0}
                
                /></li>
               {
                     tags.map((tag,id)=>(
                        <li key={String(id)}>
                            <ButtonText 
                            title={tag.name}
                            onClick={()=> handleSelectTag(tag.name)}
                            isActive={tagsSelected.includes(tag.name)}  />
                        </li>
                        ))
               }
            </Menu>

            <Search>
            <Input placeholder="Pesquisar pelo titulo"
                    onChange = {(e) => setSearch(e.target.value)}

            />
            </Search>

            <Content>
                <Section title="Minhas notas">
                {    
                    notes.map((note,id)=>{
              return  <Note data={note} key={String(id)} onClick={()=> handleDetails(note.id)}
                    />})} 
                </Section>
            </Content>

            <NewNote to="/New">
                <FiPlus/>
                Criar Nota
            </NewNote>

        </Container>

    )
}