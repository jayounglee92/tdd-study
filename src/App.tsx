import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchBox from "./components/SearchBox/SearchBox";

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
			<SearchBox placeholder="과일 이름을 검색하세요." />
		</QueryClientProvider>
	);
}

export default App;
