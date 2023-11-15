import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {HomeScreen} from "../modules";
import {BOTTOM_TAB_SCREENS} from "@utils/screens";

const Tab = createBottomTabNavigator();

const TAB_SCREEN_OPTIONS = {
	drawerPosition: "right",
	headerLeft: () => false
};

interface HomeIconProps {
  color: string;
  size: number;
}

const HomeIcon: React.FC<HomeIconProps> = ({color, size}) => (
	<Icon name="home" color={color} size={size} />
);

const BottomTabNavigation = () => {
	return (
		<Tab.Navigator screenOptions={TAB_SCREEN_OPTIONS}>
			<Tab.Screen
				name={BOTTOM_TAB_SCREENS.HOME_SCREEN}
				component={HomeScreen}
				options={{
					title: "HomeScreen",
					tabBarLabel: BOTTOM_TAB_SCREENS.HOME_SCREEN,
					tabBarIcon: HomeIcon
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigation;
