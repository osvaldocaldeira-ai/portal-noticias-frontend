import React, { useState } from "react";
import type Administrador from "../interfaces/Administrador";
import { useNavigate } from "react-router";
import axios from "axios";

function useAdministrador(){
    const [id, setId]= useState("");
    const [nome, setNome]= useState("");
        const [email, setEmail]= useState("");
            const [senha, setSenha]= useState("");
                const [mensagem, setMensagem]= useState("");
const navigate= useNavigate()         

//endereço da API
const API= "http://localhost:3000/administradores";


async function cadastrarAdministrador(evento: React.SubmitEvent<HTMLFormElement>){
evento.preventDefault();
const administrador: Administrador= {id: crypto.randomUUID(), nome,email, senha}

const listaAdministradores= JSON.parse(localStorage.getItem("listaAdministradores") || "[]");
listaAdministradores.push(administrador);
localStorage.setItem("listaAdministradores", JSON.stringify(listaAdministradores));
setMensagem("Cadastro realizado com sucesso")
setTimeout(() => {
    limparCampos()
}, 1000);
}               

function limparCampos(){
    setId("");
    setNome("");
    setEmail("");
    setSenha("");
    setMensagem("")
}


async function buscarAdministradores(): Promise<Administrador[]>{
    try {
        const resposta= await axios.get(API);
        return resposta.data;
    } catch (error) {
        console.log(error)
        setMensagem("Erro ao listar administradores: "+error)
        return []
    }
}

function excluirAdministrador(id: string){
const listaAdministradores= buscarAdministradores()
const novaLista = listaAdministradores.filter(
   (administrador)=>
administrador.id!=id
    );
localStorage.setItem("listaAdministradores", JSON.stringify(novaLista))

}

function alterarAdministrador(
    evento: React.SubmitEvent<HTMLFormElement>,
id: string){
evento.preventDefault()

const listaAdministradores= buscarAdministradores()

const novaLista= listaAdministradores.map(
    (administrador) =>{
if(administrador.id==id){
return{
    id,
    nome,
    email,
    senha
}
return administrador
}
    }
)
localStorage.setItem("listaAdministradores", JSON.stringify(novaLista))
setMensagem("Administrador Alterado Com Sucesso")
setTimeout(() => {
    navigate("/telaListaAdm")
}, 1000);
}

    return(
{
    id,
    setId,
    nome,
    setNome,
    email,
    setEmail,
    senha,
    setSenha,
    mensagem,
    setMensagem,
    cadastrarAdministrador,
    buscarAdministradores,
    excluirAdministrador,
    alterarAdministrador
}
    );
}
export default useAdministrador