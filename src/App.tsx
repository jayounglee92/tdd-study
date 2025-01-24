import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchContainer from "./components/SearchContainer/SearchContainer";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5분
			gcTime: 1000 * 60 * 30, // 30분
		},
	},
});



function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<SearchContainer />
		</QueryClientProvider>
	);
}

export default App;
