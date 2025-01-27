import styled from "@emotion/styled";

export const SearchContainer = styled.div`
	display: flex;
	gap: 8px;
	padding: 8px;
	width: 100%;
	max-width: 500px;
`;

export const SearchInput = styled.input`
	flex: 1;
	padding: 8px 12px;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 14px;

	&:focus {
		outline: none;
		border-color: #0066ff;
		box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2);
	}
`;

export const SearchButton = styled.button`
	padding: 8px 16px;
	background-color: #0066ff;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 14px;

	&:hover {
		background-color: #0052cc;
	}

	&:active {
		background-color: #004099;
	}
`;

export const Container = styled.div`
	max-width: 800px;
	margin: 2rem auto;
	padding: 0 1rem;
`;

export const SearchResults = styled.div`
	margin-top: 2rem;
`;

export const SearchResultItem = styled.div`
	padding: 1rem;
	border: 1px solid #eee;
	margin-bottom: 1rem;
	border-radius: 4px;

	h3 {
		margin: 0 0 0.5rem 0;
		color: #333;
	}

	p {
		margin: 0;
		color: #666;
	}

	&:hover {
		background-color: #f9f9f9;
	}
`;

export const LoadingSpinner = styled.div`
	text-align: center;
	padding: 2rem;
	color: #666;
`;

export const ErrorMessage = styled.div`
	color: #ff4444;
	padding: 1rem;
	text-align: center;
	background-color: #ffebee;
	border-radius: 4px;
	margin: 1rem 0;
`;
