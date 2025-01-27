import { http, HttpResponse } from "msw";
import { mockUsers } from "./data";

export const handlers = [
	http.get("https://example.com/search", async({ request }) => {
		// 0.5초 지연 추가
		await new Promise((resolve) => setTimeout(resolve, 500));

		const url = new URL(request.url);
		const searchTerm = url.searchParams.get("searchTerm")?.toLowerCase() || "";

		const filteredUsers = mockUsers.filter(
			(user) =>
				searchTerm === "" ||
				user.firstName.toLowerCase().includes(searchTerm) ||
				user.lastName.toLowerCase().includes(searchTerm)
		);

		return HttpResponse.json(filteredUsers);
	}),
];
