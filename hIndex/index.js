function hIndex(citations) {
  citations.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= count + 1) {
      count+=1;
    }
  }
  return count;
}