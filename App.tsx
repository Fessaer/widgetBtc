import React from "react";
import {Provider} from "react-redux";

import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

import Navigation from "./src/navigation/Navigation";
import QueryProvider from "./src/providers/QueryProvider";
import store from "./src/redux/store";

import "react-native-gesture-handler";

const persistor = persistStore(store);

const App = () => {

	return (
		<Provider store={store}>
			<QueryProvider>
				<PersistGate persistor={persistor}>
					<Navigation />
				</PersistGate>
			</QueryProvider>
		</Provider>
	);
};

export default App;
