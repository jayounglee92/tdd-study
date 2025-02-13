/// <reference types="cypress" />

describe("SearchBox포함된 페이지 E2E 테스트", () => {
	beforeEach(() => {
		// 테스트 시작 전 매번 사이트 방문
		cy.visit("https://tdd-study.vercel.app/");
	});

	it("검색어를 입력하고 검색 버튼을 클릭하면 결과가 표시되어야 함", () => {
		// 검색어 입력
		cy.get("[data-testid=search-input]").type("사과");

		// 검색 버튼 클릭
		cy.get("[data-testid=search-button]").click();

		// 검색 결과 확인
		cy.get("[data-testid=search-result]").should("contain.text", "사과");
	});

	it("검색어 입력 후 Enter 키를 눌러도 검색이 실행되어야 함", () => {
		// 검색어 입력 후 Enter 키 입력
		cy.get("[data-testid=search-input]").type("사과{enter}");

		// 검색 결과 확인
		cy.get("[data-testid=search-result]").should("contain.text", "사과");
	});

	it("검색 결과가 없을 경우 적절한 메시지가 표시되어야 함", () => {
		// 존재하지 않는 검색어 입력
		cy.get("[data-testid=search-input]").type("xyz123");

		// 검색 버튼 클릭
		cy.get("[data-testid=search-button]").click();

		// "검색 결과가 없습니다." 메시지 확인
		cy.get("[data-testid=search-result]").should(
			"contain.text",
			"검색 결과가 없습니다."
		);
	});

	it("새로운 검색어를 입력하면 이전 검색 결과가 초기화되어야 함", () => {
		// 첫 번째 검색
		cy.get("[data-testid=search-input]").type("사과");
		cy.get("[data-testid=search-button]").click();

		// 새로운 검색어 입력
		cy.get("[data-testid=search-input]").clear().type("오렌지");
		cy.get("[data-testid=search-button]").click();

		// 이전 검색 결과가 초기화되었는지 확인
		cy.get("[data-testid=search-result]").should("not.contain.text", "사과");
	});
});
