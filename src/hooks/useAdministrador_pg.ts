import React, { useState } from "react";
import type Administrador from "../interfaces/Administrador";
import { useNavigate } from "react-router";
import axios from "axios";
import App from "../App";

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
try {
    const resposta= await axios.post(API, {
        nome, email, senha
    });
    setMensagem(resposta.data.mensagem);
    setTimeout(() => {
        limparCampos();
    }, 1000);
} catch (error) {
    console.log(error);
    setMensagem("Erro ao cadastrar administrador: "+error)
}
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

async function excluirAdministrador(id: string){
try {
    const resposta= await axios.delete(API+"/"+id);
    setMensagem(resposta.data.mensagem);

} catch (error) {
    console.log(error);
    setMensagem("error"+error)
}
}
async function alterarAdministrador(
    evento: React.SubmitEvent<HTMLFormElement>,
id: string){
evento.preventDefault()

try {
    const resposta= await axios.put(API+"/"+id, {
        nome, email, senha
    });
setMensagem(resposta.data.mensagem);
setTimeout(() => {
    navigate("/telaListaAdm")
}, 1000);

} catch (error) {
console.log(error);
setMensagem("Erro ao alterar administrador: "+error);    
}

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