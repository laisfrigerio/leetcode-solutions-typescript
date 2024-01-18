export const twoSum = (nums: number[], target: number): number[] | null => {
  const complement: any = {};

  for (let index: number = 0; index < nums.length; index++) {
    if (complement[target - nums[index]] || complement[target - nums[index]] === 0) {
        return [index, complement[target - nums[index]]];
    }

    complement[nums[index]] = index;
  }

  return null;
};
