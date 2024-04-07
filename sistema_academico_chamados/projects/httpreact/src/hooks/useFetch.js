import { useEffect, useState } from "react"

//4 custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null)

  //5 refatorando post
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)

  //6 estado de loading
  const [loading, setLoading] = useState(false)
  //7 tratando erros
  const [error, setError] = useState(null)

  const httpConfig = (data,method) =>{
    if(method == "POST"){
      setConfig({
        method,
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      })

      setMethod(method)
    }

    if(method == "DELETE"){
      setConfig({
        method,
        id: data.id
      })
      console.log("deletando " + data.id)
      setMethod(method)
    }
  }

  

  useEffect(()=>{

    const fetchData = async() => {
      
      //6 loading
      setLoading(true)

      try{
        const response = await fetch(url)

        const json = await response.json()

        setData(json)
        setError(null)
      }catch(error){
        console.log(error.message)
        setError("Houve algum erro ao carregar os dados")
      }
      setLoading(false)
    }

    fetchData()

  }, [url, callFetch])

  //5 refatorando post
  useEffect(() => {
    const httpRequest = async() => {
      try{
        if(method === "POST"){
          let fetchOptions = [url, config]
          const response = await fetch(...fetchOptions)
          console.log(response)
          const json = await response.json()
          setCallFetch(json)
        }
        if(method === "DELETE"){
          let deleteUrl = String(url) + "/" + String(config.id)
          const response = await fetch(deleteUrl, config)
          const json = await response.json()
          setCallFetch(json)//fetch new list
        }
      }catch(error){
        console.log(error.message)
        setError("Houve algum erro ao carregar os dados")
      }
    }

    httpRequest()
  }, [config, method, url])

  

  return {data, httpConfig, loading, error};
}