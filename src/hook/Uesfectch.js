import { useEffect,useState } from "react";


const useFetch = (ufl) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try{
                   const res = await fetch(ufl)
                   const json = await res.json()
                   setData(json)
             setLoading(false) 
            }catch(error){
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [ufl])

    return { loading, error, data}
}

export default useFetch