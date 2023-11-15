import React from "react";
import {QueryClientProvider} from "react-query";
import {queryClient} from "../config/queryClient";

const QueryProvider: React.FC<{children: React.ReactNode}> = ({
	children
}) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};

export default QueryProvider;
