import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'
import { Container, Profile, Logout } from './style';
import {api} from '../../services/api'
import PlaceHolderAvatar from '../../assets/avatar_placeholder.svg'
export function Header() {
    const {signOut, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : PlaceHolderAvatar;
    return (
        <Container>
            <Profile to="/Profile">
                <img src={avatarUrl} alt="foto do usuario" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}