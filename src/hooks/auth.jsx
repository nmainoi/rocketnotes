import { createContext, useContext,useEffect } from "react";
import { useState } from "react";
import {api} from '../services/api'

export const AuthContext = createContext({});

function AuthProvider({children})
{
    const [data, setData] = useState({});
    async function signIn({email, password}){
        try{
            const response = await api.post('/sessions', {email, password})
            const {user,token} = response.data;
          
            localStorage.setItem('@RocketNotes:user', JSON.stringify(user));
            localStorage.setItem('@RocketNotes:token', token);


            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({user, token});



        }
        catch(err){
            if(err.response) alert(err.response.data.message)
            else alert('Erro ao realizar o login')    
        }
       
    }
    function signOut(){
        localStorage.removeItem('@RocketNotes:user');
        localStorage.removeItem('@RocketNotes:token');
        setData({});
    }
    useEffect(() => {
        const storagedUser = localStorage.getItem('@RocketNotes:user');
        const storagedToken = localStorage.getItem('@RocketNotes:token');
        if(storagedUser && storagedToken){
            api.defaults.headers.authorization = `Bearer ${storagedToken}`;
            setData({user: JSON.parse(storagedUser), token: storagedToken});
        }
    },[])
    return(<AuthContext.Provider value={{signIn,signOut, user : data.user}}>
             {children}
        </AuthContext.Provider>
        )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}
export { AuthProvider , useAuth};