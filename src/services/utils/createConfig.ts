import {AxiosRequestConfig} from "axios";
import {IRequestProps} from "../types";

export const createConfig = (props: IRequestProps): AxiosRequestConfig => {
	const {endPoint, headers = {}, ...otherProps} = props;
	return {
		method: "GET",
		url: `api/${endPoint}`,
		headers: {
			...headers,
		},
		...otherProps,
	};
};
