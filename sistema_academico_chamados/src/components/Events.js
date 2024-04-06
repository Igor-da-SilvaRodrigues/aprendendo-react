const Events = () =>{

    const handleMyEvent = (e) =>{
        alert("ativou o evento 1");
        console.log(e);
    };

    const renderSomething = (x)=>{
        if(x){
            return <h1>Renderizando isso</h1>
        }else{
            return <h1>Também posso renderizar isso</h1>
        }
    }


    return(
        <div>
            <div className="block">
                <h1>Evento 1</h1>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div className="block">
                <h1>Evento 2</h1>
                <button onClick={()=>{
                    alert("ativou o evento 2")//bacalhau
                }
                }
                >Clique aqui</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
}

export default Events;