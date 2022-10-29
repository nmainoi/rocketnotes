import { Container, Form, Background } from './style';
import {Link} from 'react-router-dom'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {useAuth} from '../../hooks/auth'
import { useState } from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { api } from '../../services/api';
export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signIn} = useAuth()
    async function  handleSignIn(){
       const response = await signIn({email, password});


    };
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
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button title='Entrar'
                onClick={handleSignIn}/>
                <Link to="/register"> Criar conta</Link>
            </Form>
            <Background/>
        </Container>
    )
}