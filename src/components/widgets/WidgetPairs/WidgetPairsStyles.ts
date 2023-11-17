import {Platform, StyleSheet} from "react-native";

export default StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderRadius: 5,
		...Platform.select({
			ios: {
				shadowColor: "rgb(31 41 55)",
				shadowOpacity: 0.2,
				shadowRadius: 2,
				shadowOffset: {
					height: 2,
					width: 2,
				},
			},
			android: {
				elevation: 2,
				backgroundColor: "rgba(0, 0, 0, 4)",
			},
		}),
	},
	widget: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	imageContainer: {
		margin: 5,
		tintColor: "rgb(107 114 128)",
		width: 12,
		height: 12,
		transform: [{rotate: "90deg"}],
	},
});
