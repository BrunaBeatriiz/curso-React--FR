import { useNavigate } from "react-router-dom";
import Button from "./buttonTarefas";

function Tarefas({tarefas,emClick,emClickExluir}){
    const navigate = useNavigate();

    function verDetalhes (tarefa){
        navigate(`/tarefas?titulo=${tarefa.titulo}&descricao=${tarefa.descricao}`);
    }

    // function verDetalhes (tarefa){
    //     const query = new URLSearchParams();
    //     query.set("titulo", tarefa.titulo)
    //     query.set("descricao", tarefa.descricao)
    //     navigate(`/tarefas?${query.toString()}`);
    // }
    
    
    return(
        <ul className="lista">
            {tarefas.map((tarefa)=> (
            <li key={tarefa.id}>
                <
                    button onClick={()=> emClick(tarefa.id)} 
                    className="itemlista"
                    style= {{textDecoration: tarefa.isCompleted? 'line-through':'none'}}
                >
                    {tarefa.titulo}
                    
                </button>
                <Button
                 onClick={()=> verDetalhes(tarefa)}
                >
                    &#62;
                </Button>
                <Button  onClick={() =>emClickExluir(tarefa.id)}
                > 
                 <svg xmlns="http://www.w3.org/2000/svg" height="11px" viewBox="0 -960 960 960" width="13px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>

                </Button>
            </li>
        ))}
        </ul>
    )
    
}

export default Tarefas;

//.map percorre cada item do array.

//"Eu quero passar para o componente Tarefas a prop chamada tarefas, e o valor dessa prop será a variável tarefas que eu tenho no componente pai."
//Porém, como o React não passa as props diretamente como variáveis dentro do componente filho, ele armazena todas as props dentro de um objeto chamado props. Então, no componente filho, todas as propriedades passadas para o componente serão propriedades do objeto props. O prosp.tarefas, diz que estou acessando a propriedade tarefas. Tarefa é uma das chaves desse objeto que contém um valor(array de tarefas).Acessando a propriedades tarefas dentro do objeto props,
//props.tarefas: Dentro desse objeto, existe uma propriedade chamada tarefas. O valor de props.tarefas é o array que foi passado do componente pai (no caso, o array de tarefas).

//No React, props é sempre um objeto. Esse objeto contém todas as propriedades passadas para o componente filho. Por exemplo, no caso da prop tarefas, o componente pai está passando um array de tarefas como valor para a chave tarefas dentro de props.


// // Componente pai
// <Tarefas tarefas={tarefas} />
// Neste caso, props é um objeto, e dentro desse objeto você tem uma chave chamada tarefas, que é o array que você passou.


// // Exemplo de como props se parece no componente filho
// props = {
//   tarefas: [
//     { id: 1, titulo: "Comprar pão", descricao: "Ir ao mercado comprar pão." },
//     { id: 2, titulo: "Regar as plantas", descricao: "Regar as plantas" },
//     { id: 3, titulo: "Tomar banho", descricao: "Tomar banho" }
//   ]
// }
// Usando props[0]
// Quando você tenta usar props[0], o React e o JavaScript não conseguem encontrar a chave 0 dentro do objeto props, porque objetos não usam números como chaves por padrão (eles usam strings como chaves).

//props.tarefas:

// props é o objeto que contém as propriedades passadas para o componente. No seu caso, o componente recebe uma propriedade chamada tarefas, que é um array de objetos. Cada objeto nesse array representa uma tarefa.
// Então, props.tarefas é o array de tarefas passado para o componente.
// map((tarefa) => ...):

// O método .map() é usado para iterar (ou "percorrer") sobre cada item de um array.
// Para cada item no array props.tarefas, o .map() executa uma função, e dentro dessa função você pode acessar cada item individualmente.
// O nome tarefa é simplesmente uma variável que você usa para representar o item atual (no caso, cada objeto tarefa) enquanto o .map() percorre o array.
// Por que tarefa?

// Você poderia nomear essa variável com qualquer nome, como item, task, t, etc. O nome tarefa é uma escolha que você faz para tornar o código mais legível e mais próximo do contexto da aplicação.
// No caso de seu projeto, que é um gerenciador de tarefas, tarefa é um nome muito apropriado, pois deixa claro que você está lidando com dados que representam tarefas.
// <p>{tarefa.titulo}</p>:

// Aqui, você está acessando o propriedade titulo de cada objeto tarefa. Ou seja, para cada item em props.tarefas, o código renderiza um <p> com o título dessa tarefa.

// props é o objeto com todas as propriedades passadas ao componente.
// props.tarefas é o array de objetos (tarefas) dentro de props.
// tarefa é o nome que você dá ao objeto de tarefa enquanto itera sobre o array com .map().


// As keys em React são usadas para identificar de forma única os itens de uma lista (ou array) quando eles são renderizados dinamicamente. Elas ajudam o React a identificar quais itens mudaram, foram adicionados ou removidos, de forma eficiente, durante a renderização.

// Por que são importantes?
// Desempenho: Quando você usa keys, o React pode otimizar a renderização, atualizando apenas os itens que realmente mudaram. Sem as keys, o React precisaria re-renderizar toda a lista, o que pode ser mais lento.

// Evitar erros: Sem keys, o React pode ter dificuldades para acompanhar quais componentes precisam ser atualizados, especialmente em listas dinâmicas.

// Como funcionam?
// Cada item de uma lista deve ter uma key única para que o React possa diferenciar entre os itens e controlar a renderização de forma eficiente.

// Exemplo de uso:

// key={tarefa.id}: O React usa a propriedade id de cada tarefa para dar uma chave única a cada item da lista. Isso ajuda o React a identificar e otimizar as atualizações.
// Resumo:
// key é uma propriedade especial usada para dar uma identificação única a cada item em listas renderizadas pelo React.
// Ela ajuda o React a otimizar a renderização e garantir que os itens sejam atualizados de forma eficiente.
// então as keys são um identificador único para cada elemento que ajuda o react a 'achar' uma mudança e fazer a re-renderização de forma correta

// Exatamente! As keys em React são identificadores únicos que ajudam o React a identificar quais itens de uma lista mudaram, foram adicionados ou removidos, permitindo que o React faça a re-renderização de forma eficiente.

// Explicando em detalhes:
// Identificador único para cada item:

// Quando você tem uma lista de elementos, como uma lista de tarefas, o React precisa saber qual item foi alterado, adicionado ou removido para poder atualizar a UI de forma eficiente. A key é o que permite a esse processo acontecer sem que o React precise re-renderizar toda a lista.
// Como funciona a re-renderização:

// Quando há uma alteração (como adicionar ou remover um item), o React usa as keys para comparar o estado atual da lista com o novo estado. Ele verifica as keys para ver se o item é o mesmo ou se mudou, permitindo que ele atualize apenas os itens necessários.
// Evita re-renderizações desnecessárias:

// Sem a key, o React pode não ser capaz de distinguir entre os itens da lista e pode acabar re-renderizando todos os itens, o que pode afetar o desempenho.
// Com a key, o React sabe exatamente qual item precisa ser atualizado, adicionado ou removido, e realiza apenas a atualização necessária.
// Exemplo:
// Imagine que você tem uma lista de tarefas e altera a posição de uma delas. Sem as keys, o React teria que renderizar toda a lista de tarefas de novo. Com as keys, o React consegue identificar qual tarefa foi movida e só atualiza aquela tarefa específica.


// Por que usar uma chave única?
// Identificação única: Cada chave ajuda o React a distinguir entre os diferentes itens da lista.
// Desempenho: O React pode aplicar mudanças apenas aos itens que realmente mudaram, em vez de re-renderizar toda a lista.
// Estabilidade: Com keys, o React mantém a estabilidade da UI, especialmente quando itens são reordenados, removidos ou adicionados.
// Resumo:
// Sim! As keys em React são um identificador único para cada item da lista. Elas ajudam o React a entender quais itens mudaram e a re-renderizar de forma eficiente apenas os itens que realmente precisam ser atualizados, o que melhora o desempenho e evita re-renderizações desnecessárias.

{/* <li key={tarefa.id} className="itemlista">{tarefa.titulo}</li>, isso quer dizer que (tarefa que foi atribuido o nome para o objeto atual) o id de tarefa sera a chave de identificação desse objeto? 
O ChatGPT disse:
ChatGPT
Exatamente! O que você escreveu é totalmente correto.

Aqui está uma explicação detalhada:

Código:
jsx
Copiar código
<li key={tarefa.id} className="itemlista">{tarefa.titulo}</li>
O que acontece aqui:
key={tarefa.id}:

A propriedade key é usada para atribuir uma identificação única para o item da lista, que neste caso é um elemento <li>.
tarefa.id é a chave única para cada item no array de tarefas. Isso significa que o id de cada objeto tarefa é usado como a chave para identificar de forma única aquele item na lista.
tarefa:

tarefa é o nome que você deu à variável que representa cada objeto individual dentro do array props.tarefas durante a iteração com o .map(). Ou seja, tarefa é o nome dado ao objeto atual enquanto você percorre a lista de tarefas.
Dentro desse objeto, o React usa tarefa.id para atribuir uma chave única a cada <li>. Isso ajuda o React a identificar exatamente qual item mudou, foi adicionado ou removido, garantindo uma re-renderização eficiente.
className="itemlista":

Aqui, você está adicionando uma classe CSS (itemlista) ao elemento <li>. Isso é apenas para estilo, não afeta a lógica de re-renderização.
{tarefa.titulo}:

Dentro do elemento <li>, o título da tarefa (tarefa.titulo) será exibido. Essa é a propriedade do objeto tarefa que contém o texto da tarefa.
Exemplo completo:
Suponha que você tenha o seguinte array de tarefas:



Ao usar .map() para iterar sobre esse array e renderizar a lista:

O que acontece aqui:
Para cada objeto tarefa na lista, o React renderiza um <li> com o título da tarefa.
A chave única para cada <li> é tarefa.id. Ou seja, o id de cada objeto tarefa será usado como o identificador único para o item da lista.
Exemplo de renderização:


Por que usar a key com tarefa.id?
Eficiência na re-renderização: Quando o array de tarefas muda (ex: uma nova tarefa é adicionada ou uma existente é removida), o React usa a chave key (que neste caso é o id da tarefa) para identificar de maneira única qual item foi alterado. Isso permite ao React atualizar apenas o item que foi alterado sem precisar re-renderizar toda a lista, o que melhora o desempenho.

Evita erros de reordenação: Se você adicionar, remover ou reordenar itens na lista, o React usa a key para garantir que a correspondência correta entre os dados e os elementos DOM seja mantida.

Resumo:
tarefa é o nome do objeto atual no array de tarefas durante a iteração.
tarefa.id é a chave única que você está usando para identificar cada item na lista.
O React usa essa chave para otimizar a renderização da lista, atualizando somente os itens que realmente mudaram.
Portanto, ao usar key={tarefa.id}, você está fornecendo um identificador único para cada item da lista de tarefas, o que ajuda o React a realizar renderizações mais eficientes e a manter a integridade da UI. */}

{/* <ul className="lista">
{props.tarefas.map((tarefa)=> (
<li key={tarefa.id} className="itemlista">{tarefa.titulo}</li>
))}
</ul>, usamos o argumento(tarefa) pq dizemos que no elemento atual tarefa que faremos modificações */}








// {tarefa.titulo} esqueci o pq desta linha?

// A linha {tarefa.titulo} exibe o título da tarefa no botão, pegando o valor da propriedade titulo do objeto tarefa. É o conteúdo visível que o usuário vê no botão da lista de tarefas.
//  cada item li recebe com key o id de tarefa? significa que a tarefa é um "objeto" dentro de li?

// Sim, cada item <li> recebe a key com o id da tarefa para ajudar o React a identificar de forma única cada item na lista e otimizar a renderização.

// E sim, a tarefa é um objeto dentro do .map(). Para cada iteração, o React pega o objeto tarefa do array props.tarefas e o utiliza para gerar o conteúdo de cada <li>. Cada tarefa contém várias propriedades, como id, titulo, descricao, e isCompleted, que você pode acessar dentro de cada item da lista.

// Resumindo:

// key={tarefa.id} ajuda o React a identificar de forma única cada item.
// Dentro do .map(), cada tarefa é um objeto que contém as propriedades que você usa para gerar o conteúdo do <li>.


// tarefa é o objeto a ser modificado e li é "apenas a maneira de exibição"?

// Exatamente! O tarefa é o objeto que contém os dados que você vai manipular e exibir (como id, titulo, isCompleted, etc.). O <li> é apenas a maneira de exibição desses dados na interface, ou seja, é o componente visual onde o título da tarefa e outros elementos (como botões) são mostrados.

// Então, o fluxo é:

// Objeto tarefa: Contém as informações que você quer manipular.
// Elemento <li>: Exibe essas informações de maneira visual para o usuário.
// O <li> em si não altera o objeto tarefa; ele apenas exibe os dados daquele objeto na interface. Quando você interage com o <li> (por exemplo, clicando em um botão), você pode alterar o objeto tarefa (por exemplo, mudando o isCompleted), mas a alteração acontece no estado ou dados que você tem em seu código, não diretamente no <li>.


// e li recebe o id de tarefa pq ele é um meio de comunicação para que o react saiba onde renderizar?

// Sim, exatamente! A propriedade key no <li>, que recebe o id da tarefa, serve como um identificador único para cada item da lista. Isso é crucial para o React saber de forma eficiente qual item da lista foi alterado, adicionado ou removido.

// Por que a key é importante?
// Identificação única: O key permite ao React associar cada <li> (tarefa) ao seu respectivo objeto de dados (tarefa). Isso ajuda a otimizar a renderização e evitar problemas de desempenho ao atualizar a interface.

// Eficiente re-renderização: Quando você altera o estado de uma tarefa (como marcar como concluída), o React pode identificar rapidamente qual item foi alterado, porque ele usa o key para fazer essa correspondência entre o objeto tarefa e o item <li> no DOM.


// O key (geralmente usando id) é como um identificador único que ajuda o React a gerenciar e otimizar a renderização dos itens da lista.
// Isso permite que o React saiba exatamente qual <li> (ou tarefa) foi alterado e onde renderizar as mudanças de forma eficiente.


// const navigate = useNavigate();

//     // function verDetalhes (tarefa){
//     //     navigate(/tarefas?titulo=${tarefa.titulo}&descricao=${tarefa.descricao});
//     // } 

// O código que você forneceu usa o hook useNavigate() para criar a função navigate, que é usada para navegar para uma rota dinâmica.

// No comentário, a função verDetalhes(tarefa) está configurada para navegar para a rota /tarefas e passar dois parâmetros na URL: titulo e descricao, que vêm do objeto tarefa.

// Resumindo, o que o código faz:

// useNavigate(): Cria a função navigate para navegar programaticamente.
// verDetalhes(tarefa): Quando chamada, essa função redireciona para /tarefas, incluindo titulo e descricao na query string da URL.
// Exemplo de navegação gerada:


// navigate(`/tarefas?titulo=${tarefa.titulo}&descricao=${tarefa.descricao}`);
// Isso fará com que a URL seja algo como:


// /tarefas?titulo=Exemplo&descricao=DetalheDaTarefa
// Essa navegação pode ser usada para exibir mais detalhes sobre a tarefa na página /tarefas.


// Você disse:
// então declaro a função navigate para navegar entre as paginas? na função passo a tarefa que estou clicando como parametro?
// O ChatGPT disse:
// Sim, você está correto!

// Declarar a função navigate: Você usa const navigate = useNavigate(); para obter a função que permite navegar entre as páginas da aplicação.

// Passar a tarefa como parâmetro: Na função verDetalhes(tarefa), você passa o objeto tarefa como parâmetro. Isso permite que, ao clicar na tarefa, você navegue para uma página com detalhes dessa tarefa, incluindo informações específicas, como titulo e descricao.

// Quando você chama a função navigate(), você constrói a URL com os parâmetros baseados na tarefa clicada. Isso vai passar os dados dessa tarefa na URL (como parâmetros de consulta).

// Por exemplo:

// function verDetalhes(tarefa) {
//     navigate(`/tarefas?titulo=${tarefa.titulo}&descricao=${tarefa.descricao}`);
// }
// Esse código fará com que, ao chamar verDetalhes(tarefa), o usuário seja redirecionado para /tarefas, passando os parâmetros titulo e descricao da tarefa na URL. Assim, você pode acessar essas informações na página de destino para exibir os detalhes da tarefa.



// então usando navigate eu construo a url? acesso a pagina tarefa? e passo os parametros baseado na tarefa clicada?

// Exatamente! Usando navigate, você constrói a URL, acessa a página desejada e passa os parâmetros baseados na tarefa clicada.

// Resumindo:

// Construir a URL: Você usa navigate() para criar a URL de destino, incluindo os parâmetros que você deseja passar. No caso, você está montando a URL para a página /tarefas com os parâmetros titulo e descricao.

// Acessar a página tarefas: O navigate leva o usuário para a página /tarefas (ou outra página, dependendo de como você configurar).

// Passar os parâmetros: Você passa os dados da tarefa (como titulo e descricao) para a URL, permitindo que esses parâmetros sejam acessados na página de destino, geralmente com useSearchParams ou outra abordagem.

// Exemplo:


// function verDetalhes(tarefa) {
//     navigate(`/tarefas?titulo=${tarefa.titulo}&descricao=${tarefa.descricao}`);
// }
// Com isso:

// O navigate acessa a página /tarefas.
// Os parâmetros titulo e descricao são passados via query string.
// Você pode acessar esses parâmetros na página /tarefas para mostrar os detalhes da tarefa.


// então com esses dados a pagina é criada?

// Não, a página não é criada automaticamente com esses dados. O que o navigate faz é redirecionar para a página já existente (como /tarefas), passando os dados (os parâmetros da tarefa) na URL.

// A criação e exibição da página (como o componente que vai mostrar os detalhes da tarefa) devem ser feitas separadamente. Ou seja, você precisa ter uma página ou um componente configurado para renderizar esses dados.

// Exemplo de como isso funciona:

// Redirecionando para a página de detalhes da tarefa: No seu código, ao clicar em uma tarefa, você usa navigate para redirecionar para /tarefas, passando os parâmetros titulo e descricao na URL.

// Exibindo a página de detalhes: Você precisa ter um componente que renderize a página /tarefas e recupere os parâmetros da URL para exibir as informações da tarefa.

// Exemplo de como capturar esses parâmetros na página /tarefas:

// js
// Copiar
// import { useSearchParams } from 'react-router-dom';

// function Tarefas() {
//   const [searchParams] = useSearchParams();
//   const titulo = searchParams.get('titulo');
//   const descricao = searchParams.get('descricao');

//   return (
//     <div>
//       <h1>{titulo}</h1>
//       <p>{descricao}</p>
//     </div>
//   );
// }
// Conclusão:

// O navigate redireciona para a página, mas a criação da página e exibição dos dados deve ser feita com o componente correto que captura os parâmetros e os exibe.


// com criação da pagina me refiro que com os dados que serão passados a pagina sera renderizada, mas ele ja esta criada


// Ah, entendi! Sim, você está certo. A página já está criada, e ao passar os dados com navigate, você está apenas redirecionando para ela e renderizando as informações dinamicamente com base nos parâmetros passados na URL.

// O que acontece é o seguinte:

// A página já existe (componente /tarefas): O componente que renderiza a página de detalhes já está criado.

// Navegação com dados: Ao chamar navigate, você envia os dados necessários (como titulo e descricao) na URL.

// Renderização dos dados: Quando o usuário é redirecionado para a página /tarefas, o componente associado a essa rota captura os parâmetros da URL e usa esses dados para renderizar o conteúdo na página.

// Ou seja, ao navegar para /tarefas?titulo=Exemplo&descricao=DetalheDaTarefa, a página /tarefas já está configurada para renderizar esses dados passados e exibir os detalhes da tarefa.

// Exemplo completo:

// Componente onde você navega (passando os dados):

// function verDetalhes(tarefa) {
//   navigate(`/tarefas?titulo=${tarefa.titulo}&descricao=${tarefa.descricao}`);
// }
// Componente de destino (/tarefas), que renderiza os dados:


// import { useSearchParams } from 'react-router-dom';

// function Tarefas() {
//   const [searchParams] = useSearchParams();
//   const titulo = searchParams.get('titulo');
//   const descricao = searchParams.get('descricao');

//   return (
//     <div>
//       <h1>{titulo}</h1>
//       <p>{descricao}</p>
//     </div>
//   );
// }
//  A página de detalhes (/tarefas) já foi criada. O que o navigate faz é redirecionar o usuário para ela, passando os dados na URL. O componente responsável pela página então utiliza esses dados para renderizar dinamicamente o conteúdo.

{/* <button 
                 onClick={()=> verDetalhes(tarefa)}
                className="button"> 
O ChatGPT disse:
Esse código cria um botão que, ao ser clicado, chama a função verDetalhes(tarefa) e passa o objeto tarefa como argumento.

onClick={() => verDetalhes(tarefa)}: Quando o botão é clicado, a função verDetalhes(tarefa) é chamada, e a tarefa (provavelmente um objeto com os detalhes da tarefa) é passada como parâmetro.

className="button": Aplica a classe CSS button ao botão, permitindo que ele seja estilizado com essa classe.

No contexto geral, o botão será usado para, por exemplo, redirecionar o usuário para a página de detalhes de uma tarefa, passando os dados dessa tarefa para a URL.

Exemplo:

js
Copiar
function verDetalhes(tarefa) {
  navigate(`/tarefas?titulo=${tarefa.titulo}&descricao=${tarefa.descricao}`);
}
Neste caso, ao clicar no botão, você passaria os dados da tarefa para a função verDetalhes, que construiria a URL e redirecionaria para a página /tarefas.


Você disse:
tudo isso está encapsulado dentro de uma li, e é por isso que ele sabe qual tarefa "está " mandado dados?
O ChatGPT disse:
Sim, exatamente! Quando você encapsula o botão dentro de uma <li>, geralmente está renderizando uma lista de tarefas, e cada <li> representa uma tarefa individual.

Cada <li> pode ter um objeto tarefa associado a ele, permitindo que você passe os dados da tarefa correta para a função verDetalhes quando o botão for clicado.

Por exemplo, se você estiver mapeando um array de tarefas, cada tarefa será passada para o botão dentro de cada item da lista, permitindo que a função verDetalhes saiba qual tarefa foi clicada, já que ela recebe o objeto da tarefa como parâmetro.

Exemplo:

js
Copiar
const tarefas = [
  { id: 1, titulo: 'Tarefa 1', descricao: 'Descrição da Tarefa 1' },
  { id: 2, titulo: 'Tarefa 2', descricao: 'Descrição da Tarefa 2' },
  { id: 3, titulo: 'Tarefa 3', descricao: 'Descrição da Tarefa 3' },
];

function verDetalhes(tarefa) {
  navigate(`/tarefas?titulo=${tarefa.titulo}&descricao=${tarefa.descricao}`);
}

return (
  <ul>
    {tarefas.map(tarefa => (
      <li key={tarefa.id}>
        <span>{tarefa.titulo}</span>
        <button onClick={() => verDetalhes(tarefa)} className="button">Ver Detalhes</button>
      </li>
    ))}
  </ul>
);
Aqui está o que acontece:

tarefas.map(): Para cada tarefa no array, você cria uma <li>.
Passagem de dados: Quando o botão dentro de um <li> é clicado, ele chama verDetalhes(tarefa), passando o objeto tarefa correspondente àquele item da lista.
Navegação: A função verDetalhes usa os dados da tarefa para construir a URL com navigate, redirecionando para a página /tarefas com os parâmetros dessa tarefa.
Portanto, o botão "sabe" qual tarefa está sendo clicada porque está dentro de uma <li> que contém o objeto tarefa correspondente, permitindo que você passe os dados corretamente para a função verDetalhes. */}