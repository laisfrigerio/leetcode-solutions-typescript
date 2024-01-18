export const longestPalindrome = (s: string): string => {
  const possbilities: string[] = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      const substring = s.substring(i, j);
      const reversedSubstring = substring.split("").reverse().join("");

      if (substring === reversedSubstring) {
        possbilities.push(substring);
      }
    }
  }

  if (possbilities.length === 0) return "";
  if (possbilities.length === 1) return possbilities[0];

  let result = possbilities[0];

  for (let i = 0; i < possbilities.length; i++) {
    const element = possbilities[i];

    if (element.length > result.length) {
      result = element;
    }
  }

  return result;
};
