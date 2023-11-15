import {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";

export type dataTypeResponse = "empty" | "array" | "object";

export interface IErrorData {
	code: string;
  msg: string
}

export interface IDataResponse<T, Q extends {data: T} = {data: T}> {
	msg: string;
	response: Q;
	status: number;
}

export type IAxiosResponse<
	T,
	Q extends {data: T} = {data: T}
> = AxiosResponse<IDataResponse<T, Q>>;
export type IAxiosErrorResponse = AxiosError<IDataResponse<IErrorData>>;

export interface IRequestProps extends AxiosRequestConfig {
	dataType?: dataTypeResponse;
	endPoint: string;
}


// eslint-disable-next-line @typescript-eslint/ban-types
export interface IData<T = null> {
	status: number;
	data: T;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface IError<T extends IErrorData = IErrorData> {
  status: number | string;
  data?: T;
}