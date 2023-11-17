import {TouchableOpacity, Image, ImageSourcePropType, View, Text} from "react-native";
import React from "react";
import images from "@assets/images";
import styles from "./CryptoSelectorStyles";
import {Coin} from "../../types";


interface IProps {
	onPress: (arg: boolean) => void;
	icon: ImageSourcePropType;
	coin: Coin;
}

const CryptoSelector: React.FC<IProps> = ({onPress, icon, coin}) => {
	return (
		<TouchableOpacity
			onPress={() => onPress(true)}
			style={styles.imageContainer}
		>
			<View style={styles.coinContainer}>
				<Image
					source={icon}
					style={styles.imageCoin}
				/>
				<Text style={styles.text}>{coin}</Text>
			</View>
			<Image style={styles.image} source={images.arrow} />
		</TouchableOpacity>
	);
};

export default CryptoSelector;
