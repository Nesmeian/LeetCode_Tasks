## 205. Isomorphic Strings

**Easy** **Topics** **Companies**

Given two strings _s_ and _t_, determine if they are isomorphic.

Two strings _s_ and _t_ are isomorphic if the characters in _s_ can be replaced to get _t_.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"
**Output:** true

**Explanation:**

The strings _s_ and _t_ can be made identical by:

- Mapping 'e' to 'a'.
- Mapping 'g' to 'd'.

**Example 2:**

**Input:** s = "foo", t = "bar"
**Output:** false

**Explanation:**

The strings _s_ and _t_ can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

**Example 3:**

**Input:** s = "paper", t = "title"
**Output:** true
