
import { useEffect, useState } from "react";
import MenuAdm from "../components/MenuNoticia";
import useNotcia from "../hooks/useNotcia";
import { useNavigate } from "react-router";
import useLogin from "../hooks/useLogin";

function TelaListaNoticia() {
  const { verificarUsuarioLogado } = useLogin();
  const { buscarNoticias, excluirNoticia } = useNotcia();
  const [listaNoticias, setListaNoticias] = useState(buscarNoticias());
  const navigate = useNavigate();

  useEffect(() => {
    verificarUsuarioLogado();
  }, []);

  return (
    <>
      <MenuAdm />
      <main id="conteudoPrincipal">
        <h1>Tela de Listagem de Noticias</h1>

        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Conteudo</th>
              <th colSpan={2}>Acoes</th>
            </tr>
          </thead>
          <tbody>
            {listaNoticias.map((noticia) => (
              <tr key={noticia.id}>
                <td>{noticia.titulo}</td>
                <td>{noticia.conteudo}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate("/telaCadastroNoticia", {
                        state: { noticia },
                      });
                    }}
                  >
                    Alterar
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      const confirmar = window.confirm(
                        "Deseja excluir a noticia " + noticia.titulo + "?"
                      );
                      if (confirmar) {
                        excluirNoticia(noticia.id);
                        setListaNoticias(buscarNoticias());
                      }
                    }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default TelaListaNoticia;
