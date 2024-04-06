const Challenge = ()=>{
    let v1 = 10;
    let v2 = 2;

    const sumAndLog = ()=>{
        console.log(v1+v2);
    }

    return(
        <div className="block">
            <h2>Challenge.js</h2>
            <p>Valor_1 = {v1}</p>
            <p>Valor_2 = {v2}</p>
            <button onClick={sumAndLog}>Sum</button>
        </div>
    )
}

export default Challenge;