import { RiShutDownLine } from 'react-icons/ri'

import { Container, Profile, Logout } from './style';

export function Header() {
    return (
        <Container>
            <Profile to="/Profile">
                <img src="https://github.com/nmainoi.png" alt="foto do usuario" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Mainoi</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}