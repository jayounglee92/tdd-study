import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import supabase from "../server/supabase";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

interface UseSearchProps {
	searchTerm: string;
}
interface Fruit {
	id: number;
	name: string;
	description: string;
	category: string;
}

const fetchSearchResults = async (
	searchTerm: string = ""
): Promise<PostgrestSingleResponse<Fruit[]>> => {
	let query = supabase.from("fruits").select();

	if (searchTerm) {
		query = query.or(
			`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`
		);
	}

	const response: PostgrestSingleResponse<Fruit[]> = await query;

	return response;
};

export const useSearch = ({ searchTerm }: UseSearchProps) => {
	const [isSearching, setIsSearching] = useState(true);

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
