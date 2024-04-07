import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import CssDinamico from './components/CssDinamico';
import Title from './components/Title';

function App() {
  const n = 15

  return (
    <div className="App">
      <h1>React com css</h1>

      <MyComponent/>
      <p>Este paragrafo é do app.js</p>


      {/* inline css */}
      <p style={{color: "darkblue"}}>Este elemento foi estilizado com inline css</p>
      {/* inline style dinâmico */}
      <p style={n < 10 ? {color: "red"} : {color: "green"}}>Css dinâmico</p>
      <CssDinamico/>

      {/* CSS Modules */}
      <Title/>
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
