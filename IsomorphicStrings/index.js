function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {
    // Проверяем соответствие символов в обеих строках
    if (!sMap[s[i]]) {
      sMap[s[i]] = t[i]; // Запоминаем соответствие
    }
    if (!tMap[t[i]]) {
      tMap[t[i]] = s[i]; // Запоминаем соответствие
    }

    // Если соответствие не совпадает, возвращаем false
    if (sMap[s[i]] !== t[i] || tMap[t[i]] !== s[i]) {
      return false;
    }
  }

  return true; // Если все соответствия корректны, строки изоморфны
}
