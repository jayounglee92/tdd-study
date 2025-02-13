import React, { useState } from "react";
import * as S from "./styles";
import { useSearch } from "../../hooks/useSearch";

interface SearchBoxProp {
	placeholder?: string;
	onSearch?: () => void;
}

const SearchBox = ({ placeholder, onSearch }: SearchBoxProp) => {
	const [searchTerm, setSearchTerm] = useState("");
	const {
		searchResults,
		isLoading,
		isError,
		error,
		handleSearch,
		resetSearch,
	} = useSearch({
		searchTerm,
	});

	const onSearchClick = () => {
		handleSearch();
		if (onSearch) {
			onSearch();
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSearch();
			if (onSearch) {
				onSearch();
			}
		}
	};

	return (
		<S.Container>
			<h1>검색</h1>
			<S.SearchContainer>
				<S.SearchInput
					type="text"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						resetSearch();
					}}
					onKeyDown={handleKeyPress}
					placeholder={placeholder ?? "Search..."}
					data-testid="search-input"
				/>
				<S.SearchButton
					onClick={onSearchClick}
					data-testid="search-button"
					disabled={isLoading}
				>
					{isLoading ? "검색 중..." : "Search"}
				</S.SearchButton>
			</S.SearchContainer>
			<S.SearchResults data-testid="search-result">
				{isLoading && <S.LoadingSpinner>검색 중...</S.LoadingSpinner>}

				{isError && (
					<S.ErrorMessage>
						검색 중 오류가 발생했습니다: {error?.message}
					</S.ErrorMessage>
				)}

				{searchResults?.data?.length === 0 && <div>검색 결과가 없습니다.</div>}

				{searchResults?.data?.map((fruit) => (
					<S.SearchResultItem key={fruit.id}>
						<h3>{fruit.name}</h3>
						<p>{fruit.description}</p>
					</S.SearchResultItem>
				))}
			</S.SearchResults>
		</S.Container>
	);
};

export default SearchBox;
