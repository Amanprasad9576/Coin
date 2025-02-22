import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistoricData } from "../services/fetchCoinHistoricData";
import  currencyStore  from '../state/store'
import { useState } from "react";

function useFetchCoinHistory(coinId){

    const { currency } = currencyStore();
    const [days,setDays] = useState(7);
    const [interval,setCoinInterval] = useState('daily');

     const {isLoading,isError,data:historicData} = useQuery({
        queryKey:["coinHistoricData",coinId,interval,days,currency],
        queryFn :()=>fetchCoinHistoricData(coinId,interval,days,currency),
        cacheTime: 2*60*1000,
        staleTime : 2*60*1000
    })
    return {
        isLoading,
        isError,
        historicData,
        setCoinInterval,
        days,
        currency,
        setDays
    }
}
export default useFetchCoinHistory;


/* 
const { isLoading,isError,data:historicData}=useQuery({
        queryKey:["coinHistricData",coinId,interval,days,currency],
        queryFn:()=>fetchCoinHistoricData(coinId,interval,days,currency),
          cacheTime:2*60*1000,
          staleTime:2*60*1000,
        
    });

*/