import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchBox from "../SearchBox/SearchBox";

describe("SearchBox : 단위테스트", () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
		},
	});

	beforeEach(() => {
		queryClient.clear();
	});

	test("입력값이 변경되면 input 값이 업데이트되어야 합니다", () => {
		const mockSearch = vi.fn();
		const queryClient = new QueryClient();

		render(
			<QueryClientProvider client={queryClient}>
				<SearchBox onSearch={mockSearch} />
			</QueryClientProvider>
		);
		const inputElement = screen.getByTestId("search-input");
		fireEvent.change(inputElement, { target: { value: "test" } });
		expect(inputElement).toHaveValue("test");
	});

	test("검색 버튼 클릭시 onSearch 함수가 호출되어야 합니다", () => {
		const mockSearch = vi.fn();
		const queryClient = new QueryClient();

		render(
			<QueryClientProvider client={queryClient}>
				<SearchBox onSearch={mockSearch} />
			</QueryClientProvider>
		);

		const inputElement = screen.getByTestId("search-input");
		const buttonElement = screen.getByTestId("search-button");

		fireEvent.change(inputElement, { target: { value: "test" } });
		fireEvent.click(buttonElement);

		expect(mockSearch).toHaveBeenCalled();
	});

	test("Enter 키를 누르면 onSearch 함수가 호출되어야 합니다", () => {
		const mockSearch = vi.fn();
		const queryClient = new QueryClient();

		render(
			<QueryClientProvider client={queryClient}>
				<SearchBox onSearch={mockSearch} />
			</QueryClientProvider>
		);

		const inputElement = screen.getByTestId("search-input");

		fireEvent.change(inputElement, { target: { value: "test" } });
		fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter" });

		expect(mockSearch).toHaveBeenCalled();
	});
});
