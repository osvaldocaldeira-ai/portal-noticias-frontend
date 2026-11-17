import { Link } from "react-router";

function MenuNoticia(){
return(
<>
<h1 className="destaque">
    Área administrativa
</h1>

<nav className="menu">
<p>
    <Link className="botao-menu" to="/telaCadastroNoticia">
  Cadastro de Notícias  
    </Link>
    <Link className="botao-menu" to="/telaListaNoticia">
    Lista de Notícias
    </Link>
</p>
</nav>
</>
);
}
export default MenuNoticia