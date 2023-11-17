import React, {useCallback} from "react";
import {TouchableOpacity, Text, Image} from "react-native";
import {IPickerItem} from "../types/pickerItem";

import styles from "./PickerListItemStyles";
import {Coin} from "@components/widgets/WidgetPairs/types";

export interface IPickerListItemProps extends IPickerItem {
	setValue: (value: Coin) => void;
}

const PickerListItem = (props: IPickerListItemProps) => {
	const {setValue, value, icon, disabled} = props;

	const onPress = useCallback(() => setValue(value), [setValue, value]);

	return (
		<TouchableOpacity
			style={[styles.container, disabled && {opacity: 0.3}]}
			onPress={onPress}
			disabled={disabled}
		>
			<Image source={icon} className="w-7 h-7" />
			<Text>{value}</Text>
		</TouchableOpacity>
	);
};

export default PickerListItem;
