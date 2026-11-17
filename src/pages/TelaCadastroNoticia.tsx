import { useLocation } from "react-router";
import MenuAdm from "../components/MenuAdm";
import useNoticia from "../hooks/useNoticia";
import { useEffect } from "react";
import useLogin from "../hooks/useLogin";

function TelaCadastroNoticia() {
    const { verificarUsuarioLogado } = useLogin();
    const { 
        id, setId, 
        titulo, setTitulo, 
        conteudo, setConteudo, 
        data, setData, 
        mensagem, 
        cadastrarNoticia, 
        alterarNoticia 
    } = useNoticia();

    const location = useLocation();
    const noticia = location.state?.noticia;

    useEffect(() => {
        verificarUsuarioLogado();
        if (noticia) {
            setId(noticia.id);
            setTitulo(noticia.titulo);
            setConteudo(noticia.conteudo);
            setData(noticia.data);
        } else {
            setId("");
            setTitulo("");
            setConteudo("");
            setData("");
        }
    }, [noticia]);

    return (
        <>
            <MenuAdm />
            <h1>
                {noticia ? "Tela de Alteração de Notícia" : "Tela de Cadastro de Notícia"}
            </h1>
            <main id="conteudoprincipal">
                <div id="divMensagem" role="alert">
                    {mensagem}
                </div>
                <form 
                    id="formCadAdm" 
                    onSubmit={(evento) => {
                        noticia ? alterarNoticia(evento, noticia.id) : cadastrarNoticia(evento);
                    }}
                >
                    <div>
                        <input
                            type="hidden"
                            id="txtId"
                            value={id}
                            onChange={(evento) => setId(evento.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="txtTitulo">
                            Digite o Título da Notícia
                        </label> 
                        <br />
                        <input
                            type="text"
                            id="txtTitulo"
                            required
                            value={titulo}
                            onChange={(evento) => setTitulo(evento.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="txtConteudo">
                            Digite a notícia
                        </label>
                        <br />
                        <input 
                            type="text"
                            id="txtConteudo"
                            required
                            value={conteudo}
                            onChange={(evento) => setConteudo(evento.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="txtData">
                            Digite a data da notícia
                        </label>
                        <br />
                        <input
                            type="date"
                            id="txtData"
                            required
                            value={data}
                            onChange={(evento) => setData(evento.target.value)}
                        />
                    </div>

                    <div>
                        <button type="submit">
                            {noticia ? "Alterar" : "Cadastrar"}
                        </button>
                    </div>
                </form>    
            </main>
        </>
    );
}

export default TelaCadastroNoticia;

