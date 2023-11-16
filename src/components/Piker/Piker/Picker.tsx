import React, {useCallback} from "react";
import {Modal, SafeAreaView, View} from "react-native";
import PickerList from "../PickerList/PickerList";
import {IPickerItem} from "../types/pickerItem";

import styles from "./PickerStyles";
import {Coin} from "@components/widgets/WidgetPairs/types";

export interface IPickerProps {
	isVisible: boolean;
	onClose: () => void;
	data: IPickerItem[];
	setValue: (newValue: Coin) => void;
	selectedValue: Coin;
	title?: string;
}

const Picker = (props: IPickerProps): JSX.Element => {
	const {isVisible, onClose} = props;
	const {data, setValue, selectedValue} = props;

	const selectValue = useCallback(
		(value: Coin) => {
      console.log(value)
			setValue(value);
			onClose();
		},
		[onClose, setValue]
	);
	return (
		<Modal visible={isVisible} animationType="fade" transparent>
			<SafeAreaView
				style={[
					styles.container
				]}
			>
				<View
					style={styles.modalStyle}
				>
					<PickerList
						setValue={selectValue}
						data={data}
						selectedValue={selectedValue}
					/>
				</View>
			</SafeAreaView>
		</Modal>
	);
};

export default Picker;
