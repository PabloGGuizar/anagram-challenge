// Please don't edit this file.

const areAnagram = require('../areAnagram');

test('"below" and "elbow" are anagrams', () => {
  expect(areAnagram("below", "elbow")).toBe(true);
});

test('"bad credit" and "debit" card are anagrams', () => {
  expect(areAnagram("bad credit", "debit card")).toBe(true);
});

test('"funeral" and "real fun" card are anagrams', () => {
  expect(areAnagram("funeral", "real fun")).toBe(true);
});

test('"light" and "night" are not anagrams', () => {
  expect(areAnagram("light", "night")).toBe(false);
});