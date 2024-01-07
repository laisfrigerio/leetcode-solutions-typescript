import { lengthOfLongestSubstring } from "./index";

describe("lengthOfLongestSubstring", () => {
  it("should return 0 when empty string", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });

  it("should return 1 when string with one character", () => {
    expect(lengthOfLongestSubstring("a")).toBe(1);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it("should return 2 when string with two different characters", () => {
    expect(lengthOfLongestSubstring("ab")).toBe(2);
    expect(lengthOfLongestSubstring("abb")).toBe(2);
    expect(lengthOfLongestSubstring("abbc")).toBe(2);
    expect(lengthOfLongestSubstring("abba")).toBe(2);
  });

  it("should return 3 when has a substring with 3 unique characters in sequence", () => {
    expect(lengthOfLongestSubstring("abc")).toBe(3);
    expect(lengthOfLongestSubstring("aabc")).toBe(3);
    expect(lengthOfLongestSubstring("abbcd")).toBe(3);
    expect(lengthOfLongestSubstring("abcc")).toBe(3);
    expect(lengthOfLongestSubstring("abbcdb")).toBe(3);
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("abac")).toBe(3);
  });

  it("should return 4 when has a substring with 4 unique characters in sequence", () => {
    expect(lengthOfLongestSubstring("abbcdeef")).toBe(4);
  });

  it("should return 5 when has a substring with 5 unique characters in sequence", () => {
    expect(lengthOfLongestSubstring("abbcdef")).toBe(5);
  });
});
