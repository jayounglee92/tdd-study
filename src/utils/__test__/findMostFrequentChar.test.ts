import { describe, test, expect } from "vitest";
import { findMostFrequentChar } from "..";
/*
 * 구현할 함수는 문자열에서 가장 많이 등장한 문자를 찾아내는 함수입니다.
 * 함수명: findMostFrequentChar
 * 입력: 문자열 (예: "test")
 * 출력: 가장 많이 등장한 문자 (예: "t")
 */

describe("findMostFrequentChar 테스트", () => {
	test(`빈 문자열 입력 시: findMostFrequentChar("") -> ""`, () => {
		expect(findMostFrequentChar("")).toBeNull();
	});
	test(`단일 문자 입력 시: findMostFrequentChar("a") -> "a"`, () => {
		expect(findMostFrequentChar("a")).toBe("a");
	});
	test(`여러 문자가 동일하게 등장 시: findMostFrequentChar("abac") -> "a"`, () => {
		expect(findMostFrequentChar("abac")).toBe("a");
	});
	test(`대문자가 포함되어있을 시: findMostFrequentChar("aAb") -> "a"`, () => {
		expect(findMostFrequentChar("aAb")).toBe("a");
	});
	test(`가장 많이 등장하는 문자가 여러 개일 때: findMostFrequentChar("aabb") -> "a" 또는 "b"`, () => {
		expect(findMostFrequentChar("abab")).toBe("a,b");
	});
});
