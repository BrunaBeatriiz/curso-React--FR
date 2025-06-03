import React, {useEffect, useState} from "react";
import AdicionarTarefas from "./componetes/AdicionarTarefas";
import Tarefas from "./componetes/Tarefas";
import "./index.css";
import "./styletelas.css";
import Titulo from "./componetes/titulo";
import Teste from "./componetes/testeClasse";




function Dados(){
    const [tarefas, setTarefas] = useState(
    //[
//         {
//         id:1,
//         titulo: "Comprar pão",
//         descricao: "Ir ao mercado comprar pão.",
//         isCompleted: false,
//     },{
//         id:2,
//         titulo: "Regar as plantas",
//         descricao: "Regar as plantas",
//         isCompleted:false,
//     },{
//         id:3,
//         titulo: "Tomar banho",
//         descricao:"Tomar banho",
//         isCompleted: false,
//     },
//     // {id:4,
//     // titulo:"Ir à academia",
//     // descrição: "Ir faxer exercicio",
//     // isCompleted:false},
// ]

    JSON.parse(localStorage.getItem("tarefas") || "[]")
    // erro porque JSON.parse([]) não é válido, já que [] (um array vazio em JavaScript) não é uma string JSON. O JSON.parse() só aceita strings (como "[]").


);

useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}, [tarefas]);

useEffect(()=>{
   async function buscaApi (){
     //chamar api
     const dadosAPI = await fetch ('https://jsonplaceholder.typicode.com/todos?_limit=10',{
        method:"GET",
     });
     //pegar os dados que ela retorna.
     const dados  = await dadosAPI.json();
     console.log(dados);
     //pegando a resposta da api e trasnformado-a em um json
     //armazenar esses dados no State:
     setTarefas(dados);
   };

//    buscaApi();
   
},[]);

// useEffect:

// O hook useEffect é utilizado para realizar efeitos colaterais em componentes funcionais. Aqui, ele é usado para fazer a requisição à API logo após o componente ser montado, já que o array vazio [] indica que o efeito será executado apenas uma vez, quando o componente for renderizado pela primeira vez.
// Função assíncrona buscaApi:

// Dentro do useEffect, é definida uma função assíncrona chamada buscaApi para fazer a requisição à API.
// Requisição com fetch:

// A função fetch é usada para chamar a API https://jsonplaceholder.typicode.com/todos?_limit=10. Ela retorna um objeto Response que contém a resposta da requisição.
// O método GET é especificado, mas como ele é o padrão, ele poderia ser omitido.
// Conversão para JSON:

// Após obter a resposta da API com await fetch(...), a função json() é chamada na resposta, o que converte os dados da resposta para um formato JSON.
// Armazenamento no estado:

// Com os dados já convertidos em JSON, eles são passados para a função setTarefas (presumivelmente de um estado criado com useState), para armazená-los na variável de estado tarefas.
// Execução da função:

// Após definir a função buscaApi, ela é chamada dentro do useEffect, iniciando o processo de busca e armazenamento dos dados.

//em um useEffect, se o segundo parâmetro for uma lista vazia essa função sera executada apenas uma vez quando o usuario acessar a aplicação.

//todas vez que o valor do array for alterados, a função será chamada e executada, um efeito. Um efeito que ocorre quando o arrayé mudado.
//"tarefas" nome do dados que está sendo armazenado.
//JSON.stringfy(tarefas): os valores que eu quero armazenar: convertendo uma lista js para uma string.

// Então tarefaId é apenas o nome da variável que contem o tarefa.id, que está sendo passado como argumento no componente filho?

// Exatamente! tarefaId é apenas o nome da variável que recebe o valor de tarefa.id, que é passado como argumento no componente filho.

  
function emClick(tarefaId){  
   const newTarefa = tarefas.map(tarefa =>{
    if(tarefa.id === tarefaId){
        return {...tarefa, isCompleted: !tarefa.isCompleted}
    }
    return tarefa;
   });

   setTarefas (newTarefa);
  
}

function emClickExluir(tarefaId){
    // const excluiTarefa = [...tarefas];
    // const index = excluiTarefa.findIndex(tarefa => tarefa.id === tarefaId);
    //  if(index > -1){
    //     excluiTarefa.splice(index, 1);
    //         }

    // const exclui = [...tarefas];
    // const excluiTarefa = exclui.filter((tarefa) =>  tarefaId !== tarefa.id
    // );
   

    const excluiTarefa = tarefas.filter((tarefa) =>  tarefaId !== tarefa.id
    );
   
    setTarefas (excluiTarefa);
}

function emClickAdicionar(titulo,descricao){
    const novaTarefa ={
        id : tarefas.length +1,
        titulo:titulo,
        descricao:descricao,
        isCompleted:false,
    }

    setTarefas([...tarefas, novaTarefa]);
}

    return(
        <div className="divPrincipal">
            
            <div className= "divConteudo">
                <Titulo>Gerenciador de Tarefas</Titulo>
                <AdicionarTarefas emClickAdicionar ={emClickAdicionar}/>
                <Tarefas tarefas ={tarefas} emClick={emClick} emClickExluir={emClickExluir}/>
            </div>
        </div>
    );
}

export default Dados;

