import axiosInstance from '../helper/axiosInstance';

export async function fetchCoinData(page=1 , currency) {
    const perPage = 10;
    try {
      const response = await axiosInstance.get(`coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`);

      console.log(response);
      return response.data;

    } catch (error) {
        console.log('error',error);
        return null
    }


  }
  //  https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
