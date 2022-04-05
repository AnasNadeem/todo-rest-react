import { useState, useEffect } from "react";

const useAuth = (url) => {
    const apiUrl = "http://127.0.0.1:8000/"+url;

    useEffect(() => {
    fetch(apiUrl)
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

}
 
export default useAuth;