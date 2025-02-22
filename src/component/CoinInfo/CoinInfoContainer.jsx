import  PageLoader  from "../PageLoader/PageLoader";
import CoinInfo from "./CoinInfo";
import useFetchCoinHistory from "../../Hooks/useFetchCoinHistory";

function CoinInfoContainer({coinId}){

   const {isError,isLoading,historicData,setDays,setCoinInterval,currency,days } =useFetchCoinHistory(coinId);
   
    if(isError ){
        return <Alert message= "Error fetching data" type= "error"/>
    }
    if(isLoading){
        return <PageLoader/>
    }
    return (
        <>
            <CoinInfo 
               historicData={historicData} 
               setDays={setDays}  
               setCoinInterval={setCoinInterval}
               currency={currency} 
               days={days}
            />
        </>
    )
}
export default CoinInfoContainer;


// containing the logical part of CoinInfomation 
// implement chart of historical coin chart 
//  useQuery  
//  passing the coinId what can be 