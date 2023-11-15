import React from "react";
import {Text, View} from "react-native";

import moment from "moment";
import {useGetExchangeInfo} from "@api/useGetExchangeInfo";

const HomeScreen = () => {
	const {data} = useGetExchangeInfo({symbol: "BTCUSDT"});
	console.log(data)
	return (
		<View className="h-full w-full justify-center px-4">
			<Text className="text-2xl font-bold text-center mt-8">CRYPTO CURRENCY</Text>
			<Text className="text-center text-lg">
				{moment(new Date()).format("YYYY-MM-DD")}
			</Text>
		</View>
	);
};

export default HomeScreen;
