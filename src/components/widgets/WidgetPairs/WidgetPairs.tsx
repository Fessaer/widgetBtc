import {
	View,
	Image,
	NativeSyntheticEvent,
	TextInputChangeEventData
} from "react-native";
import React, {useEffect, useState} from "react";
import {images} from "@assets/index";
import styles from "./WidgetPairsStyles";
import {mapPair} from "./constants";
import {
	IGetExchangeInfo,
	Pair,
	useGetExchangeInfo
} from "@api/useGetExchangeInfo";
import {Coin} from "./types";
import {getInputValue} from "./utils";
import {IData} from "src/services";
import {Hint, WidgetItem} from "./components";

const WidgetPairs = () => {
	const [isFromModal, setIsFromModal] = useState<boolean>(false);
	const [isToModal, setIsToModal] = useState<boolean>(false);
	const [fromValue, setFromValue] = useState<Coin>("USDT");
	const [toValue, setToValue] = useState<Coin>("BTC");
	const [inputFrom, setInputFrom] = useState<string>("1");
	const [inputTo, setInputTo] = useState<string>("1");

	const requestPair = (fromValue + toValue) as Pair;
	const isMultiply = !Pair?.[requestPair];
	const onSuccess = (data: IData<IGetExchangeInfo>) => {
		setInputTo(getInputValue("1", isMultiply, data));
		setInputFrom("1");
	};

	const {data: dataResponse, refetch} = useGetExchangeInfo(
		{symbol: mapPair[requestPair] as Pair},
		onSuccess
	);

	useEffect(() => {
		if (mapPair[requestPair]) {
			refetch();
		}
	}, [fromValue, toValue]);

	const onChangeInputFrom = (
		event: NativeSyntheticEvent<TextInputChangeEventData>
	) => {
		const text = event.nativeEvent.text;
		setInputTo(getInputValue(text, isMultiply, dataResponse));
		setInputFrom(text);
	};

	const onChangeInputTo = (
		event: NativeSyntheticEvent<TextInputChangeEventData>
	) => {
		const text = event.nativeEvent.text;
		setInputFrom(getInputValue(text, !isMultiply, dataResponse));
		setInputTo(text);
	};

	return (
		<View style={styles.container}>
			<View style={styles.widget}>
				<WidgetItem
					inputValue={inputFrom}
					onChangeInput={onChangeInputFrom}
					setIsVisible={setIsFromModal}
					visible={isFromModal}
					toValue={toValue}
					fromValue={fromValue}
					setValue={setToValue}
					text={toValue}
				/>
				<Image
					style={[styles.imageContainer]}
					source={images.changePair}
				/>
				<WidgetItem
					inputValue={inputTo}
					onChangeInput={onChangeInputTo}
					setIsVisible={setIsToModal}
					visible={isToModal}
					toValue={toValue}
					fromValue={fromValue}
					setValue={setFromValue}
					text={fromValue}
				/>
			</View>
			<Hint
				priceOne={inputFrom}
				priceTwo={inputTo}
				coinOne={toValue}
				coinTwo={fromValue}
			/>
		</View>
	);
};

export default WidgetPairs;
