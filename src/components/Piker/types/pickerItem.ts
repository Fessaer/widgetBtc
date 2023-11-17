import {Coin} from "@components/widgets/WidgetPairs/types";
import {ImageSourcePropType} from "react-native";

export interface IPickerItem {
  value: Coin;
  icon: ImageSourcePropType;
  disabled?: boolean;
}
