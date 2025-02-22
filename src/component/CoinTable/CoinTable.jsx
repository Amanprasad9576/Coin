import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinData } from "../../services/fetchCoinData";
import currencyStore from '../../state/store';
import { useNavigate } from "react-router-dom";
//import { CurrencyContext } from "../../context/CurrencyContext";
// import {useContext} from 'react';

function CoinTable (){
    const navigate = useNavigate();
 // const { currency } = useContext(CurrencyContext);
    const { currency }  = currencyStore();
 //   console.log('currency in coin table',currency);
    
    const [page,setPage] = useState(1);
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["coins",page,currency], 
        queryFn: () => fetchCoinData(page,currency), 
      //  retry: 2, 
      //  retryDelay: 1000, 
        cacheTime: 1000 * 60 * 2, 
        staleTime:1000 * 60 *2,
    });

    function handleCoinRedirect(id) {
       navigate(`/details/${id}`); 
    }
    

    useEffect(()=>{
    //    console.log(data);
    },[data]);                                                   


    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error:{error.message}</div>
    }
    return (
      <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
        <div  className="w-full flex text-black bg-yellow-600">
          {/* header of content */}
            <div className="basis-[25%]">Coin</div>
            <div className="basis-[25%]">Price</div>
            <div className="basis-[25%]">24h change</div>
            <div className="basis-[25%]">Market Cap</div>
        </div>
        <div className='flex flex-col w-[80vw] mx-auto'>
           {data && data.map((coin)=>{
              return (
                <div onClick={()=>handleCoinRedirect(coin.id)} key={coin.id} className='w-full bg-transparent text-bla flex py-4 px-2
 font-semibold  items-center justify-between '>
                    <div className="flex items-center justify-start gap-3 text-black basis-[35%]">

                       <div className="w-[5rem] h-[5rem]">
                          <img src={coin.image} className='h-full w-full' />
                       </div>

                       <div className="flex flex-col">
                          <div className="text-3xl">{coin.name}</div>         
                          <div className="text-xl">{coin.symbol}</div>         
                       </div>

                    </div>

                    <div className="basis-[25%]">
                         {coin.current_price}
                    </div>
                    <div className="basis-[20%]">
                         {coin.price_change_24h}
                    </div>
                    <div className="basis-[20%]">
                         {coin.market_cap}
                    </div>
                </div>
            )}
            )
            }
        </div>
         <div className='flex gap-4 items-center justify-center'>
            <button 
                 disabled={page===1}
                 className="btn btn-primary btn-wide bg-slate-600 text-black text-2xl "
                 onClick={()=>setPage(page-1)}
            >
               Prev
            </button>
            <button 
                 className="btn btn-primary btn-wide bg-slate-600 text-black text-2xl"
                 onClick={()=>setPage(page+1)}
            >  
                 next
            </button>
         </div>

      </div>
  )

}
export default CoinTable;