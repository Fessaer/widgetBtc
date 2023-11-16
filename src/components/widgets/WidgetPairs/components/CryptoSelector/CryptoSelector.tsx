import {TouchableOpacity, Image, ImageSourcePropType} from "react-native";
import React from "react";
import images from "@assets/images";
import styles from "./CryptoSelectorStyles";


interface IProps {
	onPress: (arg: boolean) => void;
	icon: ImageSourcePropType;
}

const CryptoSelector: React.FC<IProps> = ({onPress, icon}) => {
	return (
		<TouchableOpacity
			onPress={() => onPress(true)}
			style={styles.imageContainer}
			className="items-center flex-row"
		>
			<Image
				source={icon}
				className="w-9 h-9 mr-1"
			/>
			<Image
				style={styles.colorImage}
				source={images.arrow}
				className="w-4 h-4"
			/>
		</TouchableOpacity>
	);
};

export default CryptoSelector;
