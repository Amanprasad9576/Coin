import axiosInstance from "../helper/axiosInstance";

export async function fetchCoinHistoricData(id, interval, days = 7, currency = 'usd') {
    try {
        const response = await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}


// api https://api.coingecko.com/api/v3/coins/id/history  (row api to fetch the data)
// export const COINGECKO_API_URL='https://api.coingecko.com/api/v3/'; (modify the api url )