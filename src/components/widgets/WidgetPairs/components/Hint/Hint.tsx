import {View, Text} from "react-native";
import React from "react";
import styles from "./HintStyles";
import moment from "moment-timezone";
import {Coin, CoinName} from "../../types";

interface IProps {
  priceOne: string,
  priceTwo: string,
  coinOne: Coin,
  coinTwo: Coin,
}
const Hint: React.FC<IProps> = ({priceOne, priceTwo, coinOne, coinTwo}) => {
	moment.tz.setDefault("Europe/Moscow");
	return (
		<View style={styles.container}>
			<Text
				style={styles.text}
			>{`${priceOne} ${CoinName[coinOne]} = ${priceTwo} ${CoinName[coinTwo]}`}</Text>
			<Text style={styles.textShadow}>
				Данные носят ознакомительный характер
			</Text>
			<Text style={styles.textShadow}>
				{`${moment(new Date()).format("YYYY.MM.DD, HH:mm")} МСК`}
			</Text>
		</View>
	);
};

export default Hint;
