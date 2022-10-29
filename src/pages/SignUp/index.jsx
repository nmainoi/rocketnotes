import { Container, Form, Background } from "./style";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api";

import { FiLogIn, FiUser, FiLock } from "react-icons/fi";
export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
    const navigate = useNavigate();
  function handleSingUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso");
        navigate("/")
      })
      .catch((err) => {
        if (err.response) alert(err.response.data.message);
        else alert("Erro ao realizar o cadastro");
      });
  }
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicacao para salvar e gerenciar seus links uteis.</p>

        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button title="Cadastrar" onClick={handleSingUp} />
        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  );
}
