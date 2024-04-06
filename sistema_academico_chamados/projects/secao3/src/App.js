//import logo from './logo.svg';
import './App.css';

import Village from './assets/village.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import ReactFragment from './components/ReactFragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const [name] = useState("Fernando")
  const cars = [
    {id: 1, marca: "Nissan",  color:"Amarelo",  km:30},
    {id: 2, marca: "Ferrari", color:"Vermelho", km:40},
    {id: 3, marca: "BYD",     color:"Prata",    km:403},
    {id: 4, marca: "Renault", color:"Laranja",  km:302}
  ]

  function showMessage(){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")
  const handleMessage = (msg)=>{
    setMessage(msg)
  }

  const desafio4 = [
    {nome: "Fulano", idade: 18, profissão: "JAP"},
    {nome: "Fulano", idade: 25, profissão: "Carteiro"},
    {nome: "Fulano", idade: 13, profissão: "JAP"}
  ]

  return (
    <div className="App">
      <h1>Seção 3 - Avançando em react 🙂
      </h1>

      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* passando valor como parâmetro */}
      <ShowUserName name={name}/>
      <CarDetails marca="Nissan" km={2200} color="Vermelho"/>
      {/* Reaproveitando */}
      <CarDetails marca="Ford" color="Vermelho" km={0}/>
      <CarDetails marca="Fiat" color="Branco" km={4500}/>
      
      {/* loop em array de objetos */}
      {cars.map((car)=>(
        <CarDetails
          key={car.id}
          marca={car.marca}
          km={car.km}
          color={car.color}
        />
      ))}

      <ReactFragment propF="prop :)"/>
      <Container >
        <p>Conteudo do container</p>
      </Container>
      <ExecuteFunction method={showMessage}/>
        
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      
      
      {desafio4.map((item, i)=>(
        <UserDetails key={i} nome={item.nome} idade={item.idade} profissão={item.profissão}/>
      ))}


      {/* Imagem em public */}
      <div>
        <img src="/city.jpg" alt="Uma rua à tarde" />
      </div>

      {/*Imagem em src */}
      <div>
        <img src={Village} alt="" />
      </div>
    </div>
  );
}
export default App;
