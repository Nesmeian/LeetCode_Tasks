function wordPattern(pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;

  const patternMap = new Map();
  const wordMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i];
    const w = words[i];

    if (!patternMap.has(p)) {
      patternMap.set(p, w);
    } else if (patternMap.get(p) !== w) {
      return false;
    }

    if (!wordMap.has(w)) {
      wordMap.set(w, p);
    } else if (wordMap.get(w) !== p) {
      return false;
    }
  }

  return true;
}
