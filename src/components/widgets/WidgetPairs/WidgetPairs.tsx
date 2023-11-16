import {View, TextInput, Image} from "react-native";
import React, {useState} from "react";
import {images} from "@assets/index";
import Picker from "@components/Piker/Piker/Picker";
import styles from "./WidgetPairsStyles";
import CryptoSelector from "./components/CryptoSelector/CryptoSelector";
import {iconMap} from "./constants";
import {Coin, IParsedData} from "./types";

const WidgetPairs = () => {
	const [isFirstModal, setIsFirstModal] = useState(false);
	const [isSecondModal, setIsSecondModal] = useState(false);
	const [secondValue, setSecondValue] = useState<Coin>("USDT");
	const [firstValue, setFirstValue] = useState<Coin>("BTC");

	const data: IParsedData[] = [
		{label: "BTC", value: "BTC"},
		{label: "ETH", value: "ETH"},
		{label: "USDT", value: "USDT"}
	];

	return (
		<View style={[styles.container]}>
			<View style={styles.containerWidget}>
				<TextInput value={firstValue} style={[styles.inputContainer]} />
				<CryptoSelector onPress={setIsFirstModal} icon={iconMap[firstValue]} />
				<Picker
					isVisible={isFirstModal}
					onClose={() => setIsFirstModal(false)}
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
				<CryptoSelector
					onPress={setIsSecondModal}
					icon={iconMap[secondValue]}
				/>
				<Picker
					isVisible={isSecondModal}
					onClose={() => setIsSecondModal(false)}
					data={data}
					setValue={setSecondValue}
					selectedValue={secondValue}
				/>
			</View>
		</View>
	);
};

export default WidgetPairs;
