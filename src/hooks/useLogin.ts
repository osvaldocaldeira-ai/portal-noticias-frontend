import { useState } from "react";
import { useNavigate } from "react-router";
import type Administrador from "../interfaces/Administrador";

function useLogin(){
const [email, setEmail]= useState("");
const [senha, setSenha]= useState("");
const [mensagem, setMensagem]= useState("");

const navigate= useNavigate();
function realizarLogin(evento: any){
   evento.preventDefault();
   setMensagem("");

const listaAdministradores= JSON.parse(localStorage.getItem("listaAdministradores") || "[]");

const administrador= listaAdministradores.find(
    (adm: Administrador) => (adm.email   == email && adm.senha == senha)
)

   if(administrador){
setMensagem("Login realizado com sucesso")
localStorage.setItem("usuarioLogado", "Sim");
setTimeout(() => {
    navigate("/adm");
}, 1000);

   }else{
    setMensagem("E-mail ou senha incorreto");
   }
}

function realizarLogout(){
localStorage.removeItem("Usuário logado");
}

function verificarUsuarioLogado(){
const usuarioLogado= localStorage.getItem("usuarioLogado");
if(usuarioLogado!="Sim"){
navigate("/login")
}
}

return(
{
    email,
    setEmail,
    senha,
setSenha,
mensagem,
setMensagem,
realizarLogin,
realizarLogout,
verificarUsuarioLogado
}
    );
}
export default useLogin
