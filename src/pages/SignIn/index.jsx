import { Container, Form, Background } from './style';
import {Link} from 'react-router-dom'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
export function SignIn() {


    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

                <h2>Faca seu login</h2>
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
                <Button title='Entrar'/>
                <Link to="/register"> Criar conta</Link>
            </Form>
            <Background/>
        </Container>
    )
}