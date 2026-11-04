import { useEffect, useState } from "react";
import MenuAdm from "../components/MenuAdm";
import useAdministrador from "../hooks/useAdministrador";
import { useNavigate} from "react-router";
import useLogin from "../hooks/useLogin";

function TelaListaAdm(){
const {verificarUsuarioLogado}= useLogin()
const {buscarAdministradores, excluirAdministrador}= useAdministrador();
const [listaAdministradores, setListaAdministradores]= useState(buscarAdministradores);
const navigate= useNavigate();

useEffect(() => {
    verificarUsuarioLogado()
});

    return(

<>
<MenuAdm/>
<main id="conteudoPrincipal">

<h1 >
Tela de Listagem de Administrador
</h1>

<table>

    <thead>

    <tr>
        <th>
            Nome
        </th>
        <th>
            E-mail
        </th>
        <th colSpan={2}>
            Ações
        </th>
    </tr>
    </thead>
    <tbody>
        {
            listaAdministradores.map(
                (administrador)=>(
<tr key={administrador.id}>
    <td>
        {administrador.nome}
    </td>
    <td>
        {administrador.email}
    </td>
    <td>
        <button onClick={() =>{
            navigate("/telaCadastroAdm", {
                state: {administrador}
            })
        }}>
            Alterar
        </button>
    </td>
    <td>
       <button 
       onClick={()=>{
        const confirmar= window.confirm("Deseja excluir o administrador " + administrador.nome +"?")
        if(confirmar){
            excluirAdministrador(administrador.id)
            setListaAdministradores(buscarAdministradores())
        }
       }}>
        Excluir
        </button> 
    </td>
</tr>
                )
            )
                    }
    </tbody>
</table>
</main>

</>

    );
}
export default TelaListaAdm