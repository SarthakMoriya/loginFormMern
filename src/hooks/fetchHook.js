import axios from 'axios';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'http://localhost:8080';

export default function useFetch(query) {
    const [getData, setData] = useState({ isLoading: false, apiData: undefined, status: null, serverError: null })

    useEffect(()=>{

        if(!query) return;

        const fetchData=async()=>{
            try {
                
            } catch (error) {
                
            }
        }
    })
}