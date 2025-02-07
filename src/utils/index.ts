export const findMostFrequentChar = (str: string) => {
	if (str.length === 0) return null;

	str = str.toLowerCase(); // 문자열을 소문자로 변환

	const charCount: Record<string, number> = {};
	let maxCount = 0;

	for (const char of str) {
		charCount[char] = (charCount[char] || 0) + 1;
		maxCount = Math.max(maxCount, charCount[char]);
	}

	const mostFrequentChars = Object.keys(charCount).filter(
		(char) => charCount[char] === maxCount
	);

	return mostFrequentChars.join(",");
};
