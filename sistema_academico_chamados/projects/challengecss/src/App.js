import logo from './logo.svg';
import './App.css';
import CarDetails from './components/CarDetails';
import CenteredList from './components/CenteredList';

function App() {
  const carList = [
    {
      "id": 1,
      "marca":"Audi",
      "cor": "Vermelho",
      "km": 2091,
      "tipo": "Sedan"
    },
    {
      "id": 2,
      "marca":"Ford",
      "cor": "Cinza",
      "km": 0,
      "tipo": "Muscle"
    },
    {
      "id": 3,
      "marca":"Fiat",
      "cor": "Amarelo",
      "km": 981,
      "tipo": "Compacto"
    }
  ]


  return (
    <div className="App">
      <h1>Challenge CSS</h1>
      <CenteredList>
        <h1>Car list</h1>
        {carList.map((item)=>{return (
        <CarDetails key={item.id} car={item}/>
        )})}
      </CenteredList>
    </div>
  );
}

export default App;
