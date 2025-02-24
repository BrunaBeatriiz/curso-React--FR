// import {useState} from "react";

// function Dado (){
//   let a = 2;
//   const name = 'Darwin Nunez';
//   const [mesage, setMesage] = useState("Olá, Mundo!");
//   //let mesage = 'OIII!';


//   function fullName (user){
//     return `${user.first} ${user.last}`
//   }

//   class Jogador {
//     constructor(nome,sobrenome,numero){
//       this.nome = nome,
//       this.sobrenome = sobrenome,
//       this.numero = numero
//     }
//   }

//   //O this faz referencia ao próprio objeto.

//   // Quando você digita:

//   // this.dia = dia;
//   // você está criando um atributo dia para seu objeto e esta salvando o valor de dia neste atributo.

//   // Apos o objeto criado, você não usará mais o "this" e sim a instancia do Objeto.

//   const nunez = new Jogador('Darwin','Nunez',9);
//   const trent = new Jogador ('Trent', 'Alexander-Arnold',66);
//   const {nome:nomen,sobrenome:sobrenomen,numero:numeron} = nunez;
//   const {nome:nomet,sobrenome:sobrenomet,numero:numerot} = trent;

//   const user = {
//     first: 'Trent',
//     last:'Alexander-Arnold'
//   };

//   return (
//     <div>
//       <p> {`A soma de 2+2 é: ${a+a}.`} </p>
//       <p>O nome dele é : {name}.</p>
//       <p>Hello, {fullName(user)}</p>
//       {/* <p>{console.log(nunez)}</p> */}
//       <p>{nunez.nome} {nunez.sobrenome} {nunez.numero}</p>
//       <p>{nomen} {sobrenomen} {numeron}</p>
//       <p>{trent.nome} {trent.sobrenome} {trent.numero}</p>
//       <p>{nomet} {sobrenomet} {numerot}</p>
//       <p>{mesage}</p>
//       <button onClick={() => {
//        setMesage("Olá, fui clicado!")
//       }}>Mudar mensagem</button>
//     </div>
//   )
  
// }

// export default Dado;


// //O export default é uma funcionalidade poderosa do Node.js que permite exportar um único valor como o valor padrão de um módulo. Essa sintaxe facilita a importação desse valor em outros arquivos, simplificando a estruturação e o compartilhamento de código em projetos Node.js.

// // Ao utilizar o export default, você pode exportar objetos, funções, classes ou qualquer outro valor de forma mais conveniente, tornando seu código mais legível e modular.

// //ou,Em Node.js, o export default é uma sintaxe que permite exportar um único valor, objeto, função ou classe como o valor padrão de um módulo. Isso significa que quando um módulo é importado, o valor exportado por padrão é o valor que será usado.