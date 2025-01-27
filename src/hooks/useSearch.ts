import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface SearchResult {
	id: string;
	firstName: string;
	lastName: string;
}

interface UseSearchProps {
	searchTerm: string;
}

const fetchSearchResults = async (
	searchTerm: string
): Promise<SearchResult[] | null> => {
	const response = await fetch(
		`https://example.com/search?searchTerm=${encodeURIComponent(searchTerm)}`
	);
	return response.json();
};

export const useSearch = ({ searchTerm }: UseSearchProps) => {
	const [isSearching, setIsSearching] = useState(false);

	const {
		data: searchResults,
		isLoading,
		isError,
		error,
	} = useQuery({
		queryKey: ["search", searchTerm],
		queryFn: () => fetchSearchResults(searchTerm),
		enabled: isSearching,
	});

	const handleSearch = () => {
		setIsSearching(true);
	};

	const resetSearch = () => {
		setIsSearching(false);
	};

	return {
		searchResults,
		isLoading,
		isError,
		error,
		handleSearch,
		resetSearch,
	};
};
