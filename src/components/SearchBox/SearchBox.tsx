import React, { useState } from "react";
import * as S from "./styles";

interface SearchBoxProps {
	onSearch?: (searchTerm: string) => void;
	placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
	onSearch,
	placeholder = "Search...",
}) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = () => {
		if (onSearch) {
			onSearch(searchTerm);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<S.SearchContainer>
			<S.SearchInput
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				onKeyDown={handleKeyPress}
				placeholder={placeholder}
				data-testid="search-input"
			/>
			<S.SearchButton onClick={handleSearch} data-testid="search-button">
				Search
			</S.SearchButton>
		</S.SearchContainer>
	);
};

export default SearchBox;
