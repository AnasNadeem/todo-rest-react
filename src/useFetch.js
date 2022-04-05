import { useState, useEffect } from "react";

const useFetch = (url, header) => {
    const apiUrl = "http://127.0.0.1:8000/"+url;
    const [data, setData] = useState(null)
    const [err, setErr] = useState(true);
    const [errMsg, setErrMsg] = useState(null);

    useEffect(() => {
    fetch(apiUrl, header)
    .then(response => {
      console.log(response);
      if(response.ok){
        setErr(false);
        return response.json();
      }
      setErrMsg(response.status+ ' ' + response.statusText)
    })
    .then(data => {
      {data && setData(data)}
    })
    .catch(error => {
      setErrMsg(error.message)
    })
    }, [apiUrl]);
    return { data, err, errMsg };
}
 
export default useFetch;