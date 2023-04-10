import { useState, useEffect } from "react";
import { API } from "../api-service";
import { useCookies } from "react-cookie";

function useFetch(){
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState();
    const [token] = useCookies(['mr-token']);

    useEffect( () => {
        async function fetchData() {
            setloading(true);
            setError();
            const response = await API.getMovies(token['mr-token'])
            .catch( err => setError(err))
            setData(response);
            setloading(false);
        }
        fetchData();
    }, []);
    return [data, loading, error];
}

export {useFetch};