import {QueryClient} from "react-query";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
			cacheTime: Infinity,
			staleTime: Infinity
		}
	}
});
