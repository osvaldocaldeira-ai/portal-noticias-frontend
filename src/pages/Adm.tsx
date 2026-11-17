import { useEffect } from "react";
import MenuAdm from "../components/MenuAdm";
import useLogin from "../hooks/useLogin_pg";

function Adm(){
const {verificarUsuarioLogado}= useLogin()

useEffect(()=>{
verificarUsuarioLogado()
}, []);

return(
<>
<main id="conteudoPrincipal">
<MenuAdm/>
    
</main>



</>
)
;

}
export default Adm