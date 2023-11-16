import {IParsedData} from "@components/widgets/WidgetPairs/types";
import {ImageSourcePropType} from "react-native";

export interface IPickerItem extends IParsedData {
  icon: ImageSourcePropType;
}
