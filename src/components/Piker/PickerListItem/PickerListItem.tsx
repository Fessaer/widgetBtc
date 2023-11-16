import React, {useCallback} from "react";
import {TouchableOpacity, Text, Image} from "react-native";
import {IPickerItem} from "../types/pickerItem";

import styles from "./PickerListItemStyles";
import {Coin} from "@components/widgets/WidgetPairs/types";

export interface IPickerListItemProps extends IPickerItem {
	setValue: (value: Coin) => void;
	selectedValue?: Coin;
}

const PickerListItem = (props: IPickerListItemProps) => {
	const {setValue, selectedValue, label, value, icon} = props;

	const onPress = useCallback(() => setValue(value), [setValue, value]);

	if (selectedValue === value) {
		return null;
	}

	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<Image source={icon} className="w-7 h-7" />
			<Text>{label}</Text>
		</TouchableOpacity>
	);
};

export default PickerListItem;
