import axios, {AxiosInstance} from "axios";
import {createConfig} from "../utils/createConfig";
import {IAxiosResponse, IData, IRequestProps} from "../types";

export const publicRequest = async <T = null>(
	props: IRequestProps
): Promise<IData<T>> => {

	const baseURL = "https://www.binance.com/";

	const instance: AxiosInstance = axios.create({baseURL});

	try {
		const response = await instance.request<T, IAxiosResponse<T>>(
			createConfig(props)
		);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const {data} = response as any;

		return {
			status: response.status,
			data,
		};
	} catch (e) {
		throw new Error("ошибка обработки данных");
	}
};
