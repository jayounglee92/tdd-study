import styled from "@emotion/styled";

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
