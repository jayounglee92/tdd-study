import { useQuery } from "@tanstack/react-query";
import supabase from "../server/supabase";

export type SearchResult = {
	id: number;
	name: string;
	description: string;
	category: string;
};

export type SearchApiParams = {
	searchTerm: string;
};

export const useSearchApi = ({ searchTerm }: SearchApiParams) => {
	const searchQuery = useQuery({
		queryKey: ["search", searchTerm],
		queryFn: async (): Promise<SearchResult[]> => {
			if (!searchTerm.trim()) return [];

			const { data, error } = await supabase
				.from("fruits")
				.select("*")
        .or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`);

			if (error) {
				console.error("Supabase error:", error); // 디버깅을 위한 로그 추가
				throw error;
			}

			return data || [];
		},
	});

	return {
		searchItems: searchQuery.data || [],
		isSearching: searchQuery.isLoading,
		searchError: searchQuery.error,
	};
};
