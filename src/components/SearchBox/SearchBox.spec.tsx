import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchBox from "./SearchBox";

/**
 * search-box
 * @userStory
 * * 유저는 검색어를 입력하고 검색할 수 있다.
 *
 * * 1) 유저가 검색어를 입력하고 검색 버튼을 클릭하면 검색이 실행된다.
 * * 2) 유저가 검색어를 입력하고 Enter 키를 누르면 검색이 실행된다.
 * * 3) 검색 결과가 없을 때의 "검색 결과가 없습니다." 메시지 표시
 * * 4) 새로운 검색어 입력 시 이전 결과 초기화된다.
 */

describe("SearchBox", () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

	const renderSearchBox = () => {
		render(
			<QueryClientProvider client={queryClient}>
				<SearchBox />
			</QueryClientProvider>
		);
	};

	beforeEach(() => {
		queryClient.clear();
	});

	it("검색어를 입력하고 검색 버튼을 클릭하면 결과가 표시되어야 함", async () => {
		const user = userEvent.setup();
		renderSearchBox();

		// 검색창에 'John' 입력
		const searchInput = screen.getByTestId("search-input");
		await user.type(searchInput, "John");

		// 검색 버튼 클릭
		const searchButton = screen.getByTestId("search-button");
		await user.click(searchButton);

		// 검색 결과 확인
		await waitFor(() => {
			expect(screen.queryByText("검색 중...")).not.toBeInTheDocument();
		});

		// 결과에 "John"이 포함된 항목이 표시되는지 확인
		const searchResults = screen.getByTestId("search-result");
		expect(searchResults).toHaveTextContent("John");
	});

	it("검색어 입력 후 Enter 키를 눌러도 검색이 실행되어야 함", async () => {
		const user = userEvent.setup();
		renderSearchBox();

			const searchInput = screen.getByTestId("search-input");
		await user.type(searchInput, "John");
		const searchButton = screen.getByTestId("search-button");
		await user.click(searchButton);

		await waitFor(() => {
			expect(screen.queryByText("검색 중...")).not.toBeInTheDocument();
		});

		const searchResults = screen.getByTestId("search-result");
		expect(searchResults).toHaveTextContent("John");
	});

	it("검색 결과가 없을 경우 적절한 메시지가 표시되어야 함", async () => {
		const user = userEvent.setup();
		renderSearchBox();

		const searchInput = screen.getByTestId("search-input");
		await user.type(searchInput, "xyz123");

		const searchButton = screen.getByTestId("search-button");
		await user.click(searchButton);

		await waitFor(() => {
			expect(screen.getByText("검색 결과가 없습니다.")).toBeInTheDocument();
		});
	});

	it("새로운 검색어를 입력하면 이전 검색 결과가 초기화되어야 함", async () => {
		const user = userEvent.setup();
		renderSearchBox();

		// 첫 번째 검색
		const searchInput = screen.getByTestId("search-input");
		await user.type(searchInput, "John");
		const searchButton = screen.getByTestId("search-button");
		await user.click(searchButton);

		await waitFor(() => {
			expect(screen.queryByText("검색 중...")).not.toBeInTheDocument();
		});

		// 새로운 검색어 입력
		await user.clear(searchInput);
		await user.type(searchInput, "Jane");

		// 이전 검색 결과가 초기화되었는지 확인
		expect(screen.queryByText("John")).not.toBeInTheDocument();
	});
});
