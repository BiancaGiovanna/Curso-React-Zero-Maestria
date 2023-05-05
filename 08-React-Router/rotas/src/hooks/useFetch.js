import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFecth, setCallFecth] = useState(false)

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null)
  const [itemId, setItemId] = useState(null)


  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      setMethod(method)
    } else if (method === 'DELETE') {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json"
        }
      })
      setMethod(method);
      setItemId(data)
    }
  }
  useEffect(() => {

    const fetchData = async () => {

      setLoading(true)
      try {
        const response = await fetch(url)

        const json = await response.json()

        setData(json)
      } catch (error) {
        console.log(error.message)
        setError("Houve algum erro ao carregar os dados")
      }


      setLoading(false)
    }
    fetchData()
  }, [url, callFecth])


  useEffect(() => {
    const httpRequest = async () => {
      let json
      if (method === "POST") {
        let fetchOptions = [url, config]

        const response = await fetch(...fetchOptions)

        json = await response.json()

        setCallFecth(json)
      } else if (method === 'DELETE') {
        const deleteUrl = `${url}/${itemId}`

        const response = await fetch(deleteUrl, config)

        json = await response.json()
      }
      setCallFecth(json)
    }
    httpRequest()
  }, [config, method, url, itemId])

  return { data, httpConfig, loading, error }
}