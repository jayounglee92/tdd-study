import styled from '@emotion/styled';

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
