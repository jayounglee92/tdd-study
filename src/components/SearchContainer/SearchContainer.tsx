import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import * as S from "./styles";
import { useSearchApi } from "../../hooks/search-api";

const SearchContainer: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const { searchItems, isSearching, searchError } = useSearchApi({
		searchTerm,
	});

	const handleSearch = (newSearchTerm: string) => {
		setSearchTerm(newSearchTerm);
	};

	return (
		<S.Container>
			<h1>검색</h1>
			<SearchBox onSearch={handleSearch} />

			<S.SearchResults>
				{isSearching && <S.LoadingSpinner>검색 중...</S.LoadingSpinner>}

				{searchError && (
					<S.ErrorMessage>
						검색 중 오류가 발생했습니다: {searchError.message}
					</S.ErrorMessage>
				)}

				{!isSearching && !searchError && searchItems.length === 0 && (
					<div>검색 결과가 없습니다.</div>
				)}

				{!searchError &&
					!isSearching &&
					searchItems.map((result) => (
						<S.SearchResultItem key={result.id}>
							<h3>{result.name}</h3>
							<p>{result.description}</p>
						</S.SearchResultItem>
					))}
			</S.SearchResults>
		</S.Container>
	);
};

export default SearchContainer;
