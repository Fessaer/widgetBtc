import {
	View,
	TextInput,
	NativeSyntheticEvent,
	TextInputChangeEventData,
} from "react-native";
import React, {Dispatch, SetStateAction, memo} from "react";
import Picker from "@components/Piker/Piker/Picker";
import styles from "./WidgetItemStyles";
import CryptoSelector from "../CryptoSelector/CryptoSelector";
import {Coin} from "../../types";
import {getImage, parsedData} from "../../utils";
import {dataSelect} from "../../constants";

interface IProps {
	inputValue: string;
	onChangeInput: (
		event: NativeSyntheticEvent<TextInputChangeEventData>
	) => void;
	setIsVisible: (arg: boolean) => void;
	visible: boolean;
	toValue: Coin;
	fromValue: Coin;
	setValue: Dispatch<SetStateAction<Coin>>;
	text: Coin;
}

const WidgetItem: React.FC<IProps> = ({
	inputValue,
	onChangeInput,
	setIsVisible,
	visible,
	fromValue,
	toValue,
	setValue,
	text
}) => {
	return (
		<React.Fragment>
			<View style={styles.containerWidget}>
				<TextInput
					value={inputValue}
					onChange={onChangeInput}
					style={[styles.inputContainer]}
				/>
				<CryptoSelector
					coin={text}
					onPress={setIsVisible}
					icon={getImage(text)}
				/>
				<Picker
					isVisible={visible}
					onClose={() => setIsVisible(false)}
					data={parsedData(dataSelect, fromValue, toValue)}
					setValue={setValue}
					selectedValue={toValue}
				/>
			</View>
		</React.Fragment>
	);
};

export default memo(WidgetItem);
