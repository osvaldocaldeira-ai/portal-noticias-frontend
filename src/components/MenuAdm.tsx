import { Link } from "react-router";

function MenuAdm(){
return(
<>
<h1 className="destaque">
    Área administrativa
</h1>

<nav className="menu">

    <Link className="botao-menu" to="/telaCadastroAdm">
  Cadastro de Administradores  
    </Link>
    <Link className="botao-menu" to="/telaListaAdm">
    Lista de Administradores
    </Link>
        <Link className="botao-menu" to="/telaCadastroNotícia">
  Cadastro de Notícias  
    </Link>
    <Link className="botao-menu" to="/telaListaNoticia">
    Lista de Notícias
    </Link>
</nav>

</>
);
}
export default MenuAdm