import React, { useState } from "react";
import type Noticia from "./Noticia";
import { useNavigate } from "react-router";

function useNotcia(){
    const [id, setId]= useState("");
    const [titulo, setTitulo]= useState("");
        const [conteudo, setConteudo]= useState("");
            const [data, setData]= useState("");
                const [mensagem, setMensagem]= useState("");
const navigate= useNavigate()         
function cadastrarNoticia(evento: React.SubmitEvent<HTMLFormElement>){
evento.preventDefault();
const Noticia: noticia= {id: crypto.randomUUID(), titulo,conteudo, data}

const listaNoticias= JSON.parse(localStorage.getItem("listaNoticias") || "[]");
listaNoticias.push(Noticia);
localStorage.setItem("listaNoticias", JSON.stringify(listaNoticias));
setMensagem("Notícia adicionada com sucesso")
setTimeout(() => {
    limparCampos()
}, 1000);
}               

function limparCampos(){
    setId("");
    setTitulo("");
    setConteudo("");
    setData("");
    setMensagem("")
}


function buscarNoticias(): Noticia[]{
const listaNoticias= JSON.parse(localStorage.getItem("listaNoticias") || "[]");
return listaNoticias;
    
}

function excluirNoticia(id: string){
const listaNoticias= buscarNoticias()
const novaLista = listaNoticias.filter(
   (noticia)=>
noticia.id!=id
    );
localStorage.setItem("listaNoticias", JSON.stringify(novaLista))

}

function alterarNoticia(
    evento: React.SubmitEvent<HTMLFormElement>,
id: string){
evento.preventDefault()

const listaNoticias= buscarMoticias()

const novaLista= listaNoticias.map(noticia) =>{
if(noticia.id==id){
return{
    id,
    titulo,
    conteudo,
    data
}
return noticia
}
    }
)
localStorage.setItem("listaNoticias", JSON.stringify(novaLista))
setMensagem("Notícia Alterada Com Sucesso")
setTimeout(() => {
    navigate("/telaListaNoticia")
}, 1000);
}

    return(
{
    id,
    setId,
    titulo,
    setTitulo,
    conteudo,
    setConteudo,
    data,
    setData,
    mensagem,
    setMensagem,
    cadastrarNoticia,
    buscarNoticias,
    excluirNoticia,
    alterarNoticia
}
    );
}
export default useNotcia