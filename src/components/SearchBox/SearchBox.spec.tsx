import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchBox from "../../components/SearchBox/SearchBox";

/**
 * search-box
 * @userStory
 * * 유저는 검색어를 입력하고 검색할 수 있다.
 *
 * * 1) 유저가 검색어를 입력하고 검색 버튼을 클릭하면 검색이 실행된다.
 * * 2) 유저가 검색어를 입력하고 Enter 키를 누르면 검색이 실행된다.
 * * 3) 유저가 검색어를 입력하면 input 값이 업데이트된다.
 */

describe("SearchBox 통합 테스트", () => {
	// 성공 케이스 1
	it("유저가 검색어를 입력하고 검색 버튼을 클릭하면 검색이 실행된다", () => {
		// Given
		const searchText = "test search";
		const mockSearch = vi.fn();
		// When
		render(<SearchBox onSearch={mockSearch} />);
		const searchInput = screen.getByTestId("search-input");
		const searchButton = screen.getByTestId("search-button");

		fireEvent.change(searchInput, { target: { value: searchText } });
		fireEvent.click(searchButton);

		// Then
		expect(mockSearch).toHaveBeenCalledWith(searchText);
	});

	// 성공 케이스 2
	it("유저가 검색어를 입력하고 Enter 키를 누르면 검색이 실행된다", () => {
		// Given
		const searchText = "test search";
		const mockSearch = vi.fn();

		// When
		render(<SearchBox onSearch={mockSearch} />);
		const searchInput = screen.getByTestId("search-input");

		fireEvent.change(searchInput, { target: { value: searchText } });
		fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });

		// Then
		expect(mockSearch).toHaveBeenCalledWith(searchText);
	});

	// 성공 케이스 3
	it("유저가 검색어를 입력하면 input 값이 업데이트된다", () => {
		// Given
		const searchText = "test search";

		// When
		render(<SearchBox />);
		const searchInput = screen.getByTestId("search-input");

		fireEvent.change(searchInput, { target: { value: searchText } });

		// Then
		expect(searchInput).toHaveValue(searchText);
	});
});
