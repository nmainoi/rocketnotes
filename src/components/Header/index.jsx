import {Container, Profile} from './style';

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/nmainoi.png" alt="foto do usuario" />
                <div>
                <span>Bem-vindo</span>
                <strong>Mainoi</strong>
            </div>
            </Profile>

        </Container>
    )
}