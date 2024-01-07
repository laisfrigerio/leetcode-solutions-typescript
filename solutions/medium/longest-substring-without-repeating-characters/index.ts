const greatest = (numA: number, numB: number) => {
  return (numA > numB) ? numA : numB;
}

export const lengthOfLongestSubstring = (s: string): number => {
  const characters = {};
  
  let left: number = 0, right: number = 0;
  let longestLength: number = 0;
  let size: number = s.length;

  for (let index = 0; index < size; index++) {
    const currentCharacter: string = s[index];
    right++;
    
    if (typeof characters[currentCharacter] === "undefined") {
      characters[currentCharacter] = index;
    } else {
      left = greatest(left, characters[currentCharacter] + 1);
      characters[currentCharacter] = index;
    }

    longestLength = greatest(longestLength, right - left);
  }

  return longestLength;
};
