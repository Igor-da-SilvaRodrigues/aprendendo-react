import React from 'react'
const ListRender = () => {
    const [list, setList] = React.useState(["Matheus", "Pedro", "Josias"])

    const deleteRandomUser = ()=>{
       const randomNumber = Math.floor(Math.random() *3)
       
       
       setList((prevList)=>{
          // amaldiçoe quem decidiu que o método FILTER (que ao invés de remover um subgrupo de um conjunto, removendo aqueles que atendem a uma condição) deveria SELECIONAR UM ÚNICO MEMBRO QUE ATENDE A CONDIÇÃO, e MANTER APENAS ELE!!!!!!!!!
          // senhor, isso não é um filtro, é um getBy. Eu odeio javascript
          return prevList.filter((user) => randomNumber !== list.indexOf(user));
       })
    }

    return (
      <div>
        <ul>
          {
            list.map((item, i)=>{
              return (<li key={i}>{item}</li>)
            })
          }
        </ul>
        <button onClick={deleteRandomUser}>Delete random user</button>
      </div>
    )

    
}

export default ListRender