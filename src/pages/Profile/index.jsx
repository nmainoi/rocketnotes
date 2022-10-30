import {Container, Form, Avatar} from './style'
import {FiArrowLeft,FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'
import {useState} from 'react';
import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import {Link} from 'react-router-dom';
export function Profile(){
    const {user, updateProfile} = useAuth();

    const [name, setName] = useState(user.name ?? '');
    const [email, setEmail] = useState(user.email ?? '');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const[avatar, SetAvatar] = useState(user.avatar ?? null);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleAvatarChange(event){
        const file = event.target.files[0];
        setAvatarFile(file);
        const preview = URL.createObjectURL(file);
        SetAvatar(preview);
    }
    async function HandleUpdate(){
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }
        await updateProfile({user})
    }
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
                  src={avatar} 
                  alt="foto do usuario" />  
                  <label htmlFor='avatar'>

                  <FiCamera/>
                  <input
                  id="avatar"
                  type="file"
                  onChange={handleAvatarChange}
                  ></input>
                  </label>

                </Avatar>
                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                onChange={(e) => setOldPassword(e.target.value)}
                />
                <Input
                placeholder="Nova Senha"
                type="password"
                icon={FiLock}
                onChange={(e) => setNewPassword(e.target.value)}
                />

                <Button title="salvar" onClick={HandleUpdate}/>
            </Form>
        </Container>
    )
}