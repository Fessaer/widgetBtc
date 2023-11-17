import {StyleSheet} from "react-native";

export default StyleSheet.create({

	containerWidget: {
		flex: 1,
		borderRadius: 5,
		borderWidth: 2,
		borderColor: "rgb(203 213 225)",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	inputContainer: {
		flexGrow: 1,
		flex: 1,
		alignSelf: "stretch",
		borderRightWidth: 2,
		borderColor: "rgb(203 213 225)",
		padding: 5,
	},
});
