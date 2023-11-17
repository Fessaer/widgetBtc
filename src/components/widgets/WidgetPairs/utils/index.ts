import {IPickerItem} from "@components/Piker/types/pickerItem";
import {Coin} from "../types";
import {dataSelect} from "../constants";
import {ImageSourcePropType} from "react-native";
import { IData } from "src/services";
import { IGetExchangeInfo } from "@api/useGetExchangeInfo";

export const parsedData = (data: IPickerItem[], value: Coin, valueSecond: Coin) =>
	data
		.map((el) =>
				el.value === valueSecond || el.value === value
					? {...el, disabled: true}
					: el
		)
		.sort((x, y) => Number(!!x?.disabled) - Number(!!y?.disabled));

export const getImage = (value: Coin) => dataSelect.find((el) => el.value === value)?.icon as ImageSourcePropType;

export const getInputValue = (
	value: string,
	isMultiply: boolean,
	data?: IData<IGetExchangeInfo>
) => {
	if (data?.data.price) {
		if (isMultiply) {
			return (+value * +data?.data.price).toString().substring(0, 10);
		} else {
			return (+value / +data?.data.price).toString().substring(0, 10);
		}
	}
	return "1";
};