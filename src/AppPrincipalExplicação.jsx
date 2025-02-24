// import React, {useState} from "react";
// import AdicionarTarefas from "./componetes/AdicionarTarefas";
// import Tarefas from "./componetes/Tarefas";
// import "./index.css";


// Claro! Aqui vai um resumo dos conceitos:

// tarefas: Variável que armazena o valor atual do estado (no caso, uma lista de tarefas).
// setTarefas: Função usada para atualizar o valor de tarefas.
// useState([]): Inicializa o estado com um valor inicial (no caso, um array vazio).
// Quando você chama setTarefas([...tarefas, novaTarefa]), você está atualizando a lista de tarefas, adicionando uma nova tarefa ao array existente.


// tarefas: É a variável que armazena o valor atual do estado (por exemplo, a lista de tarefas).
// setTarefas: É a função que atualiza o valor do estado.
// useState([]): Inicializa o estado com o valor inicial (nesse caso, um array vazio).
// Resumindo:

// tarefas guarda o estado.
// setTarefas atualiza o estado.
// useState([]) define o valor inicial do estado.



// function Dados(){
//     const [tarefas, setTarefas] = useState([
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
// ]);

//   //Sim, o método map é utilizado para iterar sobre todos os elementos do array original (tarefas), e para cada elemento (tarefa) ele executa uma função.

//     // Quando o id da tarefa no map corresponder ao tarefaId (o ID da tarefa clicada), você cria um novo objeto para essa tarefa com a alteração de isCompleted. Esse novo objeto é inserido no novo array newTarefa.

//     // Para as outras tarefas (onde id não é igual a tarefaId), você retorna o objeto tal como está, sem nenhuma alteração. 
// function emClick(tarefaId){  
//    const newTarefa = tarefas.map(tarefa =>{
//     if(tarefa.id === tarefaId){
//         return {...tarefa, isCompleted: !tarefa.isCompleted}
//     }
//     return tarefa;
//    });

//    setTarefas (newTarefa);
//    //No React, o estado é imutável, ou seja, você não pode modificar diretamente o array ou objeto que está armazenado no estado. Ao invés disso, você cria um novo array com as atualizações e, em seguida, chama o setTarefas para atualizar o estado com esse novo array.

//     // Isso é o que você está fazendo na função emClick. Dentro da função, você usa o método map para criar um novo array newTarefa, com base no array tarefas antigo. Ou seja, você não modifica o array original, mas cria um novo com as atualizações necessárias.
//     //o estado atual sempre será a chamada mais recente, newTarefa.
//     //Quando você clica em outra tarefa ou em uma tarefa já alterada, a função emClick é chamada novamente.
//     // A função map agora irá percorrer o novo array de tarefas (que agora é newTarefa, o valor mais recente do estado).
//     // O estado de isCompleted da tarefa clicada será alterado com base no estado atual (newTarefa), não mais no estado anterior (tarefas).
//     // Em seguida, você cria um novo array e chama setTarefas(newTarefa), substituindo o estado atual.
//     //O estado atual será sempre o valor mais recente do estado. Ou seja, se você alterar uma tarefa, o novo estado será o array newTarefa.
//     // A cada clique, a função emClick vai iterar sobre o estado mais recente (não o estado antigo). O estado atual será sempre o valor mais recente que foi salvo com setTarefas.
//     // O array anterior (tarefas) não será mais usado após a atualização com setTarefas. O map sempre trabalha sobre o estado mais atual do array de tarefas.
// }

// O return tarefa é usado para garantir que as tarefas que não foram clicadas (ou seja, que não têm o id correspondente ao tarefaId) permaneçam inalteradas.

// Quando você usa o .map(), ele percorre todas as tarefas. Se a tarefa não for a que foi clicada, você simplesmente retorna ela mesma, sem modificações. Caso contrário, você altera a propriedade isCompleted da tarefa clicada.

// Aqui está o resumo:

// Se a tarefa não for a clicada (não tem o mesmo id), apenas retorna ela sem alterações: return tarefa;.
// Se for a tarefa clicada, você cria uma cópia dela com o isCompleted invertido e retorna a nova tarefa modificada: return {...tarefa, isCompleted: !tarefa.isCompleted};.
// O que o ...tarefa faz?
// O operador de espalhamento ...tarefa cria uma cópia superficial da tarefa que está sendo processada no momento dentro do .map(). Ele não cria cópias de todas as tarefas, mas apenas da tarefa individual que está sendo iterada.

// Por que usar?
// Isso é necessário para não modificar o estado original diretamente, já que em React é importante nunca alterar diretamente o estado. Em vez disso, criamos uma cópia da tarefa para fazer alterações, garantindo que o ciclo de renderização não seja quebrado.

// Exemplo do que acontece no .map():
// O .map() percorre o array de tarefas uma por uma.
// Para cada tarefa, o ...tarefa cria uma cópia dessa tarefa específica.
// Se a tarefa for clicada e o isCompleted for alterado, essa cópia é modificada.
// Se a tarefa não for clicada, ela é simplesmente retornada sem alterações.
// Resumo do código:

// ...tarefa: Cria uma cópia da tarefa sendo iterada e permite modificá-la sem alterar o estado original.
// return tarefa: Retorna a tarefa original quando não é necessário fazer alterações.

//     return(
//         <div className="divPrincipal">
//             <div className= "divConteudo">
//                 <h1>Gerenciador de Tarefas</h1>
//                 <Tarefas tarefas ={tarefas} emClick={emClick}/>
//                 <AdicionarTarefas/>
//             </div>
//         </div>
//     );
// }

// export default Dados;

// //Tarefas tarefas={tarefas}
// // tarefas é a props e tarefas é o 'argumento', que será passado.
// //o primeiro é parametro, aqui é a props e o segundo é o argumento sendo a propriedade que está sendo passada.

// //Sintaxe de Espalhamento (Spread syntax) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que um objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados.
// // Um array literal mais poderoso
// // Criar um novo array usando um array existente como parte dele, não é possível utilizando apenas a sintaxe de array literal. O código imperativo deve ser usado ao invés da combinação de push, splice, concat, etc. Com a sintaxe de espalhamento isso se torna muito mais sucinto:

// // JS
// // Copy to Clipboard
// // var parts = ["shoulders", "knees"];
// // var lyrics = ["head", ...parts, "and", "toes"];
// // // ["head", "shoulders", "knees", "and", "toes"]
// // Assim como espalhar a lista de argumentos, ... pode ser usado em qualquer lugar em um array literal e pode ser usado multiplas vezes.

// // Copiando um array
// // JS
// // Copy to Clipboard
// // var arr = [1, 2, 3];
// // var arr2 = [...arr]; // like arr.slice()
// // arr2.push(4);

// // // arr2 becomes [1, 2, 3, 4]
// // // arr remains unaffected
// // Nota: A sintaxe de espalhamento efetivamente vai um nível mais profundo quando se copia um array. Assim sendo, pode ser inadequado para copiar arrays multidimensionais como o exemplo a seguir mostra (é o mesmo com Object.assign() e a sintaxe de espalhamento).

// // JS
// // Copy to Clipboard
// // var a = [[1], [2], [3]];
// // var b = [...a];
// // b.shift().shift(); // 1
// // // Now array a is affected as well: [[], [2], [3]]
// // Uma maneira melhor de concatenar arrays
// // Array.concat é frequentemente usado para concatenar um array no final de um array existente. Sem a sintaxe de espalhamento é feito assim:

// // JS
// // Copy to Clipboard
// // var arr1 = [0, 1, 2];
// // var arr2 = [3, 4, 5];
// // // Append all items from arr2 onto arr1
// // arr1 = arr1.concat(arr2);
// // Com a sintaxe de espalhamento se torna isso:

// // JS
// // Copy to Clipboard
// // var arr1 = [0, 1, 2];
// // var arr2 = [3, 4, 5];
// // arr1 = [...arr1, ...arr2];
// // Array.unshift é frequentemente usado para inserir um array de valores no inicio de um array existente. Sem a sintaxe de espalhamento é feito assim:

// // JS
// // Copy to Clipboard
// // var arr1 = [0, 1, 2];
// // var arr2 = [3, 4, 5];
// // // Prepend all items from arr2 onto arr1
// // Array.prototype.unshift.apply(arr1, arr2); // arr1 is now [3, 4, 5, 0, 1, 2]
// // Com a sintaxe de espalhamento isso se torna [Note, no entanto, que isso cria um novo arr1 array. Ao contrário de Array.unshift, isso não modifica o array original arr1 array]:

// // JS
// // Copy to Clipboard
// // var arr1 = [0, 1, 2];
// // var arr2 = [3, 4, 5];
// // arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]
// // Espalhamento em objetos literais
// // A proposta Rest/Spread Properties for ECMAScript (stage 3) adiciona espalhamento de propriedades para objetos literais. Este copia as propriedades enumeráveis de um objeto informado em um novo objeto.

// // Cópia-rasa (Shallow-cloning) (excluindo o protótipo) ou fusão (merge) de objetos agora é possivel usando uma sintaxe mais curta que Object.assign().

// // JS
// // Copy to Clipboard
// // var obj1 = { foo: "bar", x: 42 };
// // var obj2 = { foo: "baz", y: 13 };

// // var clonedObj = { ...obj1 };
// // // Object { foo: "bar", x: 42 }

// // var mergedObj = { ...obj1, ...obj2 };
// // // Object { foo: "baz", x: 42, y: 13 }
// // Note que Object.assign() chamada os setters e a sintaxe de espalhamento não.
// Para tipos primitivos, a cópia com ... cria uma nova referência, e o original não será alterado.
// Para objetos ou arrays, a cópia com ... cria uma cópia rasa, e os objetos internos são compartilhados entre o original e a cópia, podendo ser alterados em ambos.

// //funçaõ de click:
// // então no if o id da tarefa que está sendo interado será testado com o id que foi clicado e assim o isCompleted será alterado? retornando uma tarefa completa, caso contrário ele retornará a tarefa sem alterações? e o setTarefas atualizará o estado 'subtituindo' o array tarefa por newTarefa?

// // Exatamente! Vou explicar de forma detalhada o que acontece, de acordo com o seu raciocínio:

// // Dentro da função map:
// // Iteração do array original: O método map percorre cada item no array tarefas (as tarefas antigas). A cada iteração, ele pega uma tarefa individual para fazer a comparação com o tarefaId que foi clicado.

// // A comparação do id:

// // Dentro do if, você compara o id da tarefa que está sendo iterada com o tarefaId (que é o id da tarefa que foi clicada).
// // Se os IDs forem iguais, significa que essa tarefa foi clicada e, portanto, você inverte o valor de isCompleted dessa tarefa. Para fazer isso, você cria uma nova tarefa com a alteração de isCompleted usando a sintaxe { ...tarefa, isCompleted: !tarefa.isCompleted }, onde:
// // { ...tarefa } cria uma cópia rasa da tarefa (preservando as outras propriedades, como titulo e descricao).
// // isCompleted: !tarefa.isCompleted altera o valor de isCompleted (se estava false, fica true; se estava true, fica false).
// // Se os IDs forem diferentes, você apenas retorna a tarefa original, sem alterações.
// // Resultado da iteração: Ao final da execução do map, o resultado é um novo array, onde apenas a tarefa clicada foi alterada (se o id corresponder) e as demais tarefas permanecem inalteradas.

// // O papel do setTarefas:
// // Depois de criar o novo array newTarefa, você chama setTarefas(newTarefa) para substituir o estado atual (tarefas) pelo novo array (newTarefa).

// // O React, então, atualiza o estado e dispara uma nova renderização, fazendo com que a UI reflita as mudanças (por exemplo, marcando a tarefa como concluída ou não).

// // Fluxo completo:
// // Quando uma tarefa é clicada, o tarefaId é passado para a função emClick.
// // O map percorre o array de tarefas e compara os ids.
// // Se o id da tarefa for igual ao tarefaId, ele cria uma nova tarefa com isCompleted invertido.
// // Se o id não for igual, ele mantém a tarefa original.
// // O novo array (newTarefa) é passado para setTarefas, que substitui o estado atual do componente pelo novo array com a tarefa atualizada.
// // O React re-renderiza o componente com o estado atualizado, refletindo a tarefa como concluída (ou não).
// // Resumo:
// // Sim, dentro do map, a tarefa sendo iterada é testada contra o tarefaId (ID da tarefa clicada). Se o id for igual, o isCompleted é alterado.
// // Sim, o setTarefas substitui o array antigo (tarefas) pelo novo array (newTarefa) que contém as atualizações.
// // O map itera sobre cada objeto do array tarefas, e para cada tarefa, o map passa esse objeto como argumento para a função de callback.
// // Cada vez que você passa por um item no array, esse item é representado pelo nome que você escolher como parâmetro (no caso, tarefa).
// // tarefa.isCompleted:

// // Dentro do map, cada item da iteração é um objeto. Então, tarefa.isCompleted é apenas acessar a propriedade isCompleted do objeto tarefa dentro da função de callback.
// // A palavra tarefa é apenas o nome dado ao objeto em cada iteração. O nome poderia ser qualquer coisa, como item, task, ou obj, mas você escolheu chamá-lo de tarefa.
// // Por que usar tarefa.isCompleted?:

// // Mesmo que você esteja usando o map para iterar sobre o array, você ainda precisa acessar as propriedades de cada objeto iterado. Ou seja, você ainda precisa usar tarefa.isCompleted para acessar o valor da propriedade isCompleted de cada objeto.
// // Resumo:
// // O .tarefa se refere a cada objeto que está sendo iterado pelo map. Dentro de cada iteração, tarefa é um objeto individual, e você usa .isCompleted para acessar ou modificar essa propriedade específica do objeto.
// // O .tarefa é necessário porque você está manipulando as propriedades de cada objeto individualmente dentro do array de objetos.
// // então o map seria apenas para ver se está diferente, mas ele precisa acessar o objeo atual com .?

// // Exatamente, você entendeu a ideia!

// // O map é usado para percorrer cada objeto do array, e dentro de cada iteração, você precisa acessar as propriedades de cada objeto individualmente. Para fazer isso, você usa o ponto (.) para acessar as propriedades do objeto atual. Vou detalhar isso de forma bem clara:

//map e ...
// No primeiro caso, você está utilizando o map(), que já cria uma nova cópia do array por padrão. O map() percorre o array e cria um novo array com os itens modificados ou não. Assim, a cópia do array já é feita implicitamente.

// No segundo caso, você usa o splice() diretamente, então é necessário criar uma cópia do array (const excluiTarefa = [...tarefas]) para evitar modificar o estado diretamente, já que o splice() altera o array original.

// Em resumo:

// No map(), a cópia do array é feita automaticamente.
// No splice(), você precisa criar uma cópia do array manualmente antes de modificar.

// Você disse:
// mas se map ja cria uma copia do array o ...tarefa é apenas uma copia da iteração atual? respostas curtas
// O ChatGPT disse:
// ChatGPT
// Sim, exatamente! O map() cria uma cópia do array, e o ...tarefa cria uma cópia da tarefa atual dentro dessa iteração.

// Ou seja:

// map() cria um novo array com base nas tarefas.
// ...tarefa garante que a tarefa atual seja copiada (sem modificar a original) antes de fazer alterações nela, como no isCompleted.
// Portanto, o ...tarefa não afeta o array inteiro, só a tarefa atual que está sendo iterada.

// FIndIndex  
// No caso do findIndex() em vez de retornar o elemento, ele nos retornará o índice do primeiro elemento que satisfizer a condição que estabelecemos no argumento passado

// Caso nenhum elemento coincida com o que procuramos o método retornará -1.

// Sim, o item que não foi alterado permanecerá no array. O item que você deseja excluir será removido pelo `splice()`. No entanto, o uso de `splice()` modifica diretamente a cópia do array, então não precisa de um `return tarefa`, já que você está **alterando a cópia** do array diretamente.

// **Resumo**:
// - O `splice()` remove apenas o item específico, e os itens restantes ficam no array.
// - Não precisa de `return tarefa` porque a alteração já foi feita diretamente na cópia do array.


// Use indexOf() para valores simples (não objetos).
// Use findIndex() quando precisar verificar uma condição mais complexa, como propriedades dentro de objetos.

//explicação de parametro no filter:
 // tarefaId é o parâmetro da função de callback, mas o filter está passando o objeto tarefa para a função. Ou seja, tarefaId vai ser o objeto completo da tarefa, e você está tentando compará-lo diretamente com tarefa.id, o que não faz sentido porque são coisas diferentes:
    // tarefaId (parâmetro) é o objeto completo.
    // tarefa.id é uma propriedade do objeto.
    //     então o valor de tarefaId(parametro) seria passado mas oq n seria acessado seria o valor do objeto tarefa? respostas curtas
    // O ChatGPT disse:
    // ChatGPT
    // Exato! Se você usar tarefaId como parâmetro, ele vai ser o valor do ID (não o objeto completo). Você não conseguiria acessar as propriedades do objeto tarefa, como tarefa.id ou tarefa.nome.


    // Você disse:
    // ah sim, então ele compararia o valor de TarefaId(parametro) com um objeto "completo" que seria tarefa?
    // O ChatGPT disse:
    // ChatGPT
    // Isso mesmo! Se você usar tarefaId como parâmetro, ele será um valor (o ID) e você estaria tentando comparar esse valor com o objeto completo (que é tarefa). Como comparar um valor com um objeto não faz sentido, a comparação não funcionaria corretamente.
        

    //Esta função é um componente React válido porque aceita um único objeto "props" como argumento com dados e retorna um elemento React.
    // Em react o componente filho recebe apenas um objeto props.


