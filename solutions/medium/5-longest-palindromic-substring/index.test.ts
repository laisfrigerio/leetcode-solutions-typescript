import { longestPalindrome } from "./index";

describe("lengthOfLongestSubstring", () => {
  it("should return the first character", () => {
    expect(longestPalindrome("abcdef")).toBe("a");
  });

  it("should return the first character", () => {
    expect(longestPalindrome("a")).toBe("a");
  });

  it("should return hhh", () => {
    expect(longestPalindrome("ahhhcdef")).toBe("hhh");
  });

  it("should return bab", () => {
    expect(longestPalindrome("babad")).toBe("bab");
  });

  it("should return bb", () => {
    expect(longestPalindrome("cbbd")).toBe("bb");
  });
});
