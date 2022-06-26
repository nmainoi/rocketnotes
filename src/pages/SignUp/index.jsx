import { Container, Form, Background } from './style';
import {Link} from 'react-router-dom'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


import { FiLogIn, FiUser, FiLock } from 'react-icons/fi'
export function SignUp() {


    return (
        <Container>
                 <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

                <h2>Crie sua conta</h2>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiLogIn}
                />
                <Input
                    placeholder="senha"
                    type="password"
                    icon={FiLock}
                />
                <Button title='Cadastrar'/>
                <Link to='/'>Voltar para o login</Link>
            </Form>
       
        </Container>
    )
}