import { useEffect, useState } from "react";
import { get } from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    get(`${process.env.REACT_APP_URL_API}${endpoint}`) //obteniendo valores de api con fecth
      .then(({ data }) => setData(data)) //ver respuesta de api en comnsola-- pasando el valor de data a cupcakes
      .catch(err => setError(err));
  }, [endpoint])

  return [data,error]
}
export default useFetch
