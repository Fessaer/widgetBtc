import {useQuery, UseQueryResult} from "react-query";
import {publicRequest, IData, IError} from "../services";


interface IGetExchangeInfoParams {
  symbol: "BTCUSDT" | "ETHBTC" | "ETHUSDT"
}

interface IGetExchangeInfo {
  symbol: string;
  price: string
}

const URL_EXCHANGE_INFO = "v3/ticker/price";

const queryFn = (params: IGetExchangeInfoParams) => {
	return publicRequest({
		method: "GET",
		endPoint: URL_EXCHANGE_INFO,
		params,
	});
};

export const useGetExchangeInfo = (params: IGetExchangeInfoParams): UseQueryResult<IData<IGetExchangeInfo>, IError> => {
	return useQuery([URL_EXCHANGE_INFO], () => queryFn(params));
};