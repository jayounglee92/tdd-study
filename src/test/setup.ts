import "@testing-library/jest-dom";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// Vitest에 jest-dom 매처 확장 추가
expect.extend(matchers);

// 각 테스트 후 정리
afterEach(() => {
	cleanup();
});
