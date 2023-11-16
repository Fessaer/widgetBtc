import React, {useCallback, useEffect, useRef} from "react";
import {FlatList, FlatListProps} from "react-native";
import {isEqual} from "lodash";
import PickerListItem from "../PickerListItem/PickerListItem";
import {IPickerItem} from "../types/pickerItem";
import { Coin } from "@components/widgets/WidgetPairs/types";

export interface IPickerListProps
	extends Omit<FlatListProps<IPickerItem>, "renderItem"> {
	selectedValue: Coin;
	setValue: (newValue: Coin) => void;
	data: IPickerItem[];
}

const PickerList = (props: IPickerListProps): JSX.Element => {
	const {data, setValue, selectedValue} = props;
	const flatListRef = useRef<FlatList>(null);

	useEffect(() => {
		if (!selectedValue || !data?.length) {
			return;
		}
		const index = data.findIndex((el) => isEqual(el.value, selectedValue));
		if (index !== -1) {
			flatListRef.current?.scrollToIndex({index, animated: true});
		}
	}, []);

	const keyExtractor = useCallback(({label}: IPickerItem) => label, []);

	const renderItem = useCallback(
		({item}: {item: IPickerItem}) => {
			const {value, label, icon} = item;
			return (
				<PickerListItem
					icon={icon}
					value={value}
					setValue={setValue}
					label={label}
					selectedValue={selectedValue}
				/>
			);
		},
		[selectedValue, setValue]
	);

	const onScrollToIndexFailed = useCallback(
		(info: {
			index: number;
			highestMeasuredFrameIndex: number;
			averageItemLength: number;
		}) => {
			const wait = new Promise((resolve) => setTimeout(resolve, 500));
			wait.then(() => {
				flatListRef.current?.scrollToIndex({index: info.index, animated: true});
			});
		},
		[]
	);

	return (
		<FlatList
			ref={flatListRef}
			keyExtractor={keyExtractor}
			data={data}
			renderItem={renderItem}
			showsVerticalScrollIndicator={false}
			onScrollToIndexFailed={onScrollToIndexFailed}
		/>
	);
};

export default PickerList;
