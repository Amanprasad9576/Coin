import axiosInstance from "../helper/axiosInstance";

async function fetchCoinDetails(id){
    try {
         const response = await axiosInstance.get(`/coins/${id}`);
          console.log(response.data);
         return response.data;
    } catch (error) {
         console.log('Something went wrong on fetching Detail',error); 

    }
}
export default fetchCoinDetails;




// This is only function 
// Making the ui component so that fetch the data 




// This is an Api call which takes id and 
//on passing the id fetch all detail of that particular items
// const url = 'https://api.coingecko.com/api/v3/coins/markets';
// export const COINGECKO_API_URL='https://api.coingecko.com/api/v3/';