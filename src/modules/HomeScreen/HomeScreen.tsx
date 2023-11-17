import React from "react";
import {Keyboard, Text, TouchableWithoutFeedback, View} from "react-native";
import moment from "moment";
import {WidgetPairs} from "@components/index";
import styles from "./HomeScreenStyles";

const HomeScreen = () => {
	return (
		<TouchableWithoutFeedback onPressOut={Keyboard.dismiss}>
			<View style={styles.container}>
				<WidgetPairs />
				<Text style={styles.textHeader}>CRYPTO CURRENCY</Text>
				<Text style={styles.textTime}>
					{moment(new Date()).format("YYYY.MM.DD")}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default HomeScreen;
