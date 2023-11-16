import {View, TextInput, Image} from "react-native";
import React, {useState} from "react";
import {images} from "@assets/index";
import Picker from "@components/Piker/Piker/Picker";
import styles from "./WidgetPairsStyles";
import CryptoSelector from "./components/CryptoSelector/CryptoSelector";
import {iconMap} from "./constants";
import {Coin, IParsedData} from "./types";

const WidgetPairs = () => {
	const [firstValue, setFirstValue] = React.useState<Coin>("BTC");
	const [secondValue, setSecondValue] = React.useState<Coin>("USDT");
	const [visible, setIsVisible] = useState(false);

  const coinHandle = () => {}

	const data: IParsedData[] = [
		{label: "BTC", value: "BTC"},
		{label: "ETH", value: "ETH"},
		{label: "USDT", value: "USDT"}
	];

	return (
		<View style={[styles.container]}>
			<View style={styles.containerWidget}>
				<TextInput value={firstValue} style={[styles.inputContainer]} />
				<CryptoSelector onPress={setIsVisible} icon={iconMap[firstValue]} />
				<Picker
					isVisible={visible}
					onClose={() => setIsVisible(false)}
					data={data}
					setValue={setFirstValue}
					selectedValue={firstValue}
				/>
			</View>
			<Image
				style={[styles.imageContainer, styles.colorImage]}
				source={images.changePair}
				className="w-3 h-3 rotate-90 "
			/>
			<View style={styles.containerWidget}>
				<TextInput value={secondValue} style={[styles.inputContainer]} />
				<CryptoSelector onPress={setIsVisible} icon={iconMap[secondValue]} />
				<Picker
					isVisible={visible}
					onClose={() => setIsVisible(false)}
					data={data}
					setValue={setSecondValue}
					selectedValue={secondValue}
				/>
			</View>
		</View>
	);
};

export default WidgetPairs;
