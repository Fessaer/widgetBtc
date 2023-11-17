import React, {useCallback, useEffect, useRef} from "react";
import {FlatList, FlatListProps} from "react-native";
import {isEqual} from "lodash";
import PickerListItem from "../PickerListItem/PickerListItem";
import {IPickerItem} from "../types/pickerItem";
import {Coin} from "@components/widgets/WidgetPairs/types";

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

	const keyExtractor = useCallback(({value}: IPickerItem) => value, []);

	const renderItem = useCallback(
		({item}: {item: IPickerItem}) => {
			const {value, icon, disabled = false} = item;
			return (
				<PickerListItem
					icon={icon}
					value={value}
					setValue={setValue}
					disabled={disabled}
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
