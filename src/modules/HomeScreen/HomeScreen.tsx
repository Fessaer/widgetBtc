import React, {useState, useEffect} from "react";
import {Keyboard, Text, TouchableWithoutFeedback, View} from "react-native";

import moment from "moment";
import {IGetExchangeInfoParams, useGetExchangeInfo} from "@api/useGetExchangeInfo";
import {WidgetPairs} from "@components/index";

const HomeScreen = () => {
	const [pair, setPair] = useState<IGetExchangeInfoParams>({symbol: "BTCUSDT"});
	const {data, refetch} = useGetExchangeInfo(pair);

	const onPair = (coin) => {
		

	}

	useEffect(() => {
		refetch();
	}, []);
	
	console.log(data)
	return (
		<TouchableWithoutFeedback onPressOut={Keyboard.dismiss}>
			<View className="h-full justify-center px-4">
				<WidgetPairs />
				<Text className="text-2xl font-bold text-center mt-8">
					CRYPTO CURRENCY
				</Text>
				<Text className="text-center text-lg">
					{moment(new Date()).format("YYYY-MM-DD")}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default HomeScreen;
