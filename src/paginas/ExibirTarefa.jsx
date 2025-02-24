import { useNavigate, useSearchParams } from "react-router-dom";
import Titulo from "../componetes/titulo";

function ExibirTarefa(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const titulo = searchParams.get("titulo");
    const descricao = searchParams.get("descricao");
    return(
        <div className="divPrincipal">
            <div className="divConteudoTarefa">
                <div className="display">
                    <button onClick={() => navigate(-1)} className="butTarefa">
                    &#8249;
                    </button>
                    <Titulo>Detalhes da Tarefa</Titulo>
                </div>
            <div className="divCont">
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
            </div>
        </div>
    );
}

export default ExibirTarefa;

//exportar a funçõa.
// useSearchParams() é um hook do react-router-dom que retorna um array com dois elementos:

// Objeto com os parâmetros da URL (ex: titulo, descricao).
// Função para atualizar os parâmetros da URL.
// Desestruturação: Ao usar const [searchParams] = useSearchParams();, você pega o primeiro item do array, que é o objeto com os parâmetros.

// mas como ele acessa ao primeiro? pq a desestruturação sempre ira acessar o primeiro e atribuir aquela variavel?
// O ChatGPT disse:
// Sim, você está correto! A desestruturação de arrays no JavaScript sempre acessa o primeiro valor, ou o segundo, ou o terceiro, conforme a posição no array. No caso de useSearchParams(), ele retorna um array com dois valores:

// O primeiro valor é o objeto com os parâmetros da URL.
// O segundo valor é uma função para atualizar os parâmetros.
// Como funciona a desestruturação:
// Quando você escreve:

// js
// Copiar
// const [searchParams] = useSearchParams();
// A desestruturação está pegando o primeiro valor do array retornado pelo useSearchParams(), que é o objeto que contém os parâmetros da URL (como titulo, descricao etc.).

// Explicando a desestruturação:
// useSearchParams() retorna um array com dois elementos.
// A desestruturação (const [searchParams] = ...) acessa o primeiro elemento do array e o atribui à variável searchParams.
// Se você quiser acessar o segundo valor, pode fazer assim:
// js
// Copiar
// const [searchParams, setSearchParams] = useSearchParams();
// Agora, searchParams contém os parâmetros da URL, e setSearchParams é a função que você usaria para atualizar esses parâmetros.

// Por que isso acontece?
// A desestruturação de arrays funciona assim:

// Primeiro valor: const [primeiro] = array — A variável primeiro recebe o primeiro item do array.
// Segundo valor: const [, segundo] = array — A variável segundo recebe o segundo item (e você pode ignorar o primeiro, colocando uma vírgula antes).
// Então, ao usar const [searchParams] = useSearchParams();, você está pegando o primeiro valor do array, que é o objeto com os parâmetros da URL.

// Acessando parâmetros: Para acessar um parâmetro da URL, você usa searchParams.get("nomeDoParametro").

// Flexibilidade: O nome da constante (como searchParams) pode ser qualquer nome que você quiser (ex: elementos), desde que você entenda que é o objeto com os parâmetros da URL.

// Exemplo final:

// const [elementos] = useSearchParams();
// const titulo = elementos.get("titulo");  // Acessa o valor do parâmetro "titulo"

// então o searchParams se refere a constante searchPArams?
// O ChatGPT disse:
// Sim, o searchParams se refere à constante searchParams que você declarou, que contém o objeto retornado pelo useSearchParams().

// Ou seja, o nome da constante que você escolheu (como searchParams) vai ser o que você usará para acessar os parâmetros da URL.

// Exemplo:

// js
// Copiar
// const [searchParams] = useSearchParams();  // Aqui, 'searchParams' é o nome da constante
// No código acima, searchParams é a constante que vai armazenar o objeto com os parâmetros da URL. A partir dessa constante, você pode acessar os valores, como:

// js
// Copiar
// const titulo = searchParams.get("titulo");  // Pega o valor do parâmetro "titulo"
// O nome da constante (searchParams) é apenas uma convenção, e você pode chamá-la de qualquer nome, mas a ideia é sempre armazenar os parâmetros da URL nesse objeto.

// useSearchParams já é um "metodo pronto" que retorna um array ou objeto com todos os dados da url?
// O ChatGPT disse:
// Sim, o useSearchParams é um hook pronto fornecido pelo react-router-dom. Ele retorna um objeto (ou estrutura similar a um array) com os parâmetros de consulta da URL. O primeiro valor do array é o objeto que contém os dados, e o segundo valor é uma função para atualizar esses parâmetros, se necessário.


// Você disse:
// então são passados dois parametros ele sabe qual parametro utilizar baseado no que vc deseja fazer?
// O ChatGPT disse:
// Exatamente! O useSearchParams retorna um array com dois elementos:

// O primeiro elemento é o objeto searchParams que contém os parâmetros da URL.
// O segundo elemento é uma função setSearchParams, usada para atualizar ou modificar os parâmetros da URL.
// Quando você usa o searchParams.get("parametro"), ele sabe qual parâmetro acessar baseado no nome que você passar para ele, como "titulo" ou "descricao".

// Se você usar o setSearchParams, ele atualizará os parâmetros na URL conforme você precisar.


// Você disse:
// o serchPArams faz o que o  new URL(window.location.href); fazia? respostas curtas?
// O ChatGPT disse:
// Sim, o searchParams faz algo semelhante ao new URL(window.location.href) no sentido de acessar os parâmetros da URL, mas de forma mais simples e integrada ao React.


// Passagem de parametros: 
// ? : indica a passagem de parametros a seguir.
// = : indica a passagem de valores dos parâmetros.(chave = valor).
// & : indica a separação entre parâmetros.

// Ex:https//exemplo.com/index.html?id=123&categoria=estudos.


// O const navigate = useNavigate(); é um hook do React Router que retorna uma função chamada navigate (ou qualquer outro nome que você escolher). Essa função permite navegar programaticamente para outras rotas dentro da aplicação.

// Exemplo:

// js
// Copiar
// const navigate = useNavigate();
// navigate('/nova-rota');
// Você pode nomear a função como quiser (não precisa ser navigate), mas ela sempre será usada para redirecionar o usuário para diferentes páginas da aplicação.



// é uma função pronta de react.


{/* <button onClick={() => navigate(-1)} className="butTarefa">



Esse código cria um botão que, ao ser clicado, executa a função navigate(-1), que faz o navegador voltar para a página anterior no histórico.

navigate(-1): Isso usa a função navigate para voltar uma página no histórico do navegador, equivalente ao botão "voltar" do navegador.
onClick={() => navigate(-1)}: Define que, ao clicar no botão, a navegação para a página anterior será acionada.
className="butTarefa": Aplica a classe CSS butTarefa ao botão, permitindo estilizar o botão com essa classe.
Resumindo: é um botão que, ao ser clicado, leva o usuário para a página anterior no histórico.



então ele usa a função navigate que é uma função pronta de navegação para ir para a pagina anterior, que a aplicação "olha" o historico e vai para a pagina anterior? respostas curtas

Sim, exatamente! A função navigate(-1) usa o histórico de navegação do navegador para voltar à página anterior.


então navigate é apenas uma função pronta que é utilizada para a navegação entre páginas? e o (-1) seria uma maneira simples de voltar a pagina?

Sim, exatamente! O navigate é uma função pronta usada para navegação entre páginas. O (-1) é um atalho para voltar uma página no histórico de navegação, equivalente ao botão "voltar" do navegador.


se eu apenas utilizar o navigate (-1), sem declarar a constante em cima com useNavigate, o comando não funciobara?

Sim, o comando não funcionará se você tentar usar navigate(-1) sem declarar a constante com useNavigate().

O useNavigate() precisa ser chamado para obter a função navigate. Sem isso, você não terá acesso à função de navegação.

const navigate = useNavigate();
navigate(-1);  // Agora funciona!
Sem declarar const navigate = useNavigate(), o código não saberia o que é navigate, e causaria um erro. */}