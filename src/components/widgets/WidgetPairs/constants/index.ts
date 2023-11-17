import images from "@assets/images";
import {IPickerItem} from "@components/Piker/types/pickerItem";

export const mapPair = {
	USDTBTC: "BTCUSDT",
	BTCUSDT: "BTCUSDT",
	ETHBTC: "ETHBTC",
	BTCETH: "ETHBTC",
	ETHUSDT: "ETHUSDT",
	USDTETH: "ETHUSDT"
};

export const dataSelect: IPickerItem[] = [
	{value: "BTC", icon: images.btc},
	{value: "ETH", icon: images.eth},
	{value: "USDT", icon: images.usdt}
];