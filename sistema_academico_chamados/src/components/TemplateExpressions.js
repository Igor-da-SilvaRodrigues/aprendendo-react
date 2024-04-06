import MyComponent from "./MyComponent"

const TemplateExpressions = () => {
    const name = "Igor"
    const data = {
        age: 31,
        job: "programmer"
    }
    
    data.toString = ()=>{
        return(
            "{age: " + data.age + ",\n"+
            "job: " + data.job + "}"
        );
    }

    return (
        <div>
            <h1>Olá {name}, bem vindo!</h1>
            <p>Dados = {data.toString()}</p>
            <div>
                <MyComponent/>
            </div>
        </div>
    );
}

export default TemplateExpressions;