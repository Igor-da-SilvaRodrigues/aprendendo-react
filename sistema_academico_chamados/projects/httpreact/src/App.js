import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react';
import { useFetch } from './hooks/useFetch';

function App() {
  const url = "http://localhost:3000/products"
  const [products, setProducts] = useState([])

  //4 custom hooks
  const {data: items, httpConfig, loading, error} = useFetch(url)//fetch data from url as a json object

  
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  
  //1- resgatando dados
  
  

  // useEffect(()=>{
  //   const fetchAndSetProducts = async() => {
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     setProducts(data)
  //   }
  //   fetchAndSetProducts()
  // }, []);
  

  //2- add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price
    }
    
    
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body:JSON.stringify(product)
    // })


    // //3- carregamento dinamico
    // const addedProduct = await response.json()
    // setProducts((previousProducts)=>[...previousProducts, addedProduct])
    

    //5 refatorando post
    httpConfig(product, "POST")
  };

  console.log("error:", error)
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p> }
      {!error && (<ul>
        {items && items.map((item)=>(<li key={item.id}>{item.name} - R$: {item.price}<button onClick={(e)=>httpConfig(item, "DELETE")}>Delete</button></li>))}
      </ul>)}

      <div className="add-produt">
        <form onSubmit={handleSubmit}>
          <label >
            Nome:
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
          </label>
          <label >
            Preço:
            <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar" disabled={loading ? true : false} />
        </form>
      </div>
    </div>
  );
}

export default App;
