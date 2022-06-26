import {Container, Form, Avatar} from './style'
import {FiArrowLeft,FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import {Link} from 'react-router-dom';
export function Profile(){

    return (
        <Container>
            <header>
                <Link to='/'>
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                  <img 
                  src="https://github.com/nmainoi.png" 
                  alt="foto do usuario" />  
                  <label htmlFor='avatar'>

                  <FiCamera/>
                  <input
                  id="avatar"
                  type="file"
                  ></input>
                  </label>

                </Avatar>
                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                />
                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />
                <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                />
                <Input
                placeholder="Nova Senha"
                type="password"
                icon={FiLock}
                />

                <Button title="salvar"/>
            </Form>
        </Container>
    )
}