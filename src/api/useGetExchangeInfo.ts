import {useQuery, UseQueryResult} from "react-query";
import {publicRequest, IData, IError} from "../services";

export enum Pair {
	"BTCUSDT" = "BTCUSDT",
	"ETHBTC" = "ETHBTC",
	"ETHUSDT" = "ETHUSDT"
} 
export interface IGetExchangeInfoParams {
  symbol: Pair;
}

interface IOnSuccess {
	(arg: IData<IGetExchangeInfo>): void
}

export interface IGetExchangeInfo {
  symbol: string;
  price: string;
}

const URL_EXCHANGE_INFO = "v3/ticker/price";

const queryFn = (params: IGetExchangeInfoParams) => {
	return publicRequest({
		method: "GET",
		endPoint: URL_EXCHANGE_INFO,
		params,
	});
};

export const useGetExchangeInfo = (params: IGetExchangeInfoParams, onSuccess: IOnSuccess): UseQueryResult<IData<IGetExchangeInfo>, IError> => {
	return useQuery([URL_EXCHANGE_INFO], () => queryFn(params), {enabled: false, onSuccess});
};