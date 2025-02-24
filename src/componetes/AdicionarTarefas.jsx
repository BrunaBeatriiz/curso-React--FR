import React, {useState} from "react";
import Input from "./input";


function AdicionarTarefas({emClickAdicionar}){

   const [titulo, setTitulo] = useState("");
   const [descricao, setDescricao] = useState("");
   // console.log({titulo,descricao});

   return (
    <div className="lista">
      <Input
      type="text" name="titulo" id="idtitulo" placeholder="DIgite o titúlo da tarefa:" 
      value={titulo}
      onChange={(event)=> setTitulo(event.target.value)}
      />

      <Input
      type="text" name="desc" id="iddesc" placeholder="DIgite a descrição da tarefa:" 
      value={descricao}
      onChange={(event)=> setDescricao(event.target.value)}
      />
      <button
        onClick={()=>{

         if(!titulo.trim() || !descricao.trim()){
            return alert("Preencha o título e a descrição da tarefa.");
         }
         emClickAdicionar(titulo,descricao);
         
        }} className="butAd">Adicionar</button>
    </div>
   )
}

//limpar o onput depois de adiconar uma tarefa.
export default AdicionarTarefas;




// - event: Representa o evento que ocorreu, como um onChange, onClick, etc.
// - event.target: Refere-se ao elemento DOM que disparou o evento (exemplo: o input ou o botão).
// - event.target.value: No caso de um input, isso acessa o valor que foi inserido pelo usuário no input.


// onChange dispara sempre que o valor do input muda.
// event.target aponta para o input.
// event.target.value retorna o valor do input.

// event.target é o elemento que gerou o evento e você pode acessar suas propriedades, como value, para manipular o estado ou fazer algo com o elemento.



// Fluxo de dados entre componentes:

// Componente Filho:
//    - O filho possui estados como `tituloTarefa` e `descricaoTarefa`, que armazenam os valores de entrada.
//    - Esses valores são passados para o componente pai quando o botão é clicado.
//    - A função `onClick` chama `emClickAdicionar(tituloTarefa, descricaoTarefa)`, passando os valores dos estados.

// Componente Pai:
//    - O pai recebe esses valores na função `emClickAdicionar(tituloInput, descricaoInput)`.
//    - No pai, você pode usar esses parâmetros (por exemplo, `tituloInput` e `descricaoInput`) para criar um novo objeto de tarefa e atualizar o estado das tarefas usando `setTarefas`.
//    - A ordem dos parâmetros no pai deve corresponder à ordem dos valores passados do filho.

// Troca de nomes:
// - Você pode usar nomes diferentes para as variáveis no filho e no pai. O importante é que os valores sejam passados corretamente.
// - O que importa é a ordem dos valores ao passá-los: se a ordem for trocada, os valores também serão trocados.

// Conclusão:
// - Quando você passa os valores do filho para o pai, a ordem dos parâmetros deve ser respeitada. Se os parâmetros forem passados na ordem errada, os valores também serão atribuídos de forma errada.


// Explicação do Código:
// onChange={(event) => setTitulo(event.target.value)}:

// onChange: Chama a função sempre que o valor do input muda (quando o usuário digita algo).
// event: É o parâmetro que contém as informações sobre o evento (o que aconteceu no input).
// setTitulo: Atualiza o estado titulo com o valor digitado no input.
// event.target.value: Acessa o valor do input que disparou o evento, através de target (o campo de input).
// Por que o target é importante?

// O target é necessário para acessar o elemento específico que disparou o evento, especialmente quando você tem múltiplos inputs. Sem ele, o React não saberia de qual input pegar o valor.
// value={titulo}:

// O valor do input é controlado pelo estado titulo. Quando o estado muda, o valor no campo de input também muda.
// value é para exibição, e o onChange permite atualizar esse valor conforme o usuário digita.

// O setTitulo altera o estado cada vez que onChange é disparado (toda vez que uma nova letra é adicionada/digitada), o value={titulo} é usado para atualizar o valor do estado na exibição, então o valor daquela caixa será o valor do estado, que é atualizado a cada nova letra. 
// o onchange é adicionado e cada nova palavra digitada ele dispara automaticamente, o event é necessario ser passado como parametro para que a função possa acessar os valores contidos nele, o target é usado para que o valor pego seja daquele input em especifico (com dois campos de input e sem o target o js não saberia de onde pegar os valores), e o value signifaca acessar os valores daquele input. 
// Sim, o onChange é disparado automaticamente sempre que o valor do input muda (quando o usuário digita algo).

// Quando o botão "Adicionar" é clicado, o valor atual de titulo e descricao é passado para o pai através da função emClickAdicionar para adicionar uma nova tarefa.

// Resumo:
// onChange dispara automaticamente ao digitar.
// O titulo e descricao são passados ao clicar no botão para o pai adicionar a tarefa.

// Explicação do Código:
// onChange={(event) => setTitulo(event.target.value)}:

// onChange dispara a função toda vez que o valor do input muda.
// event é o parâmetro que contém as informações sobre o evento.
// setTitulo atualiza o estado titulo com o valor digitado.
// event.target.value acessa o valor digitado no input.
// Por que usar event?

// O event é necessário para acessar as informações do evento, como o target (o campo de input) e o value (o valor digitado).
// target é o elemento que disparou o evento, permitindo acessar suas propriedades.
// Se houver mais de um input?

// event.target ajuda a identificar qual input disparou o evento, permitindo acessar o valor correto, especialmente se você tiver vários inputs.