````markdown
# Pattern Matching Problem

## Problem Statement

Given a pattern and a string `s`, determine if `s` follows the same pattern.

### Definition of "Follow"

A string `s` follows the pattern if there is a bijection between a letter in `pattern` and a non-empty word in `s`. Specifically:

- Each letter in `pattern` maps to exactly one unique word in `s`.
- Each unique word in `s` maps to exactly one letter in `pattern`.
- No two letters map to the same word, and no two words map to the same letter.

## Examples

### Example 1

**Input:**

```plaintext
pattern = "abba"
s = "dog cat cat dog"
```
````

**Output:**

```plaintext
true
```

**Explanation:**
The bijection can be established as:

- 'a' maps to "dog".
- 'b' maps to "cat".

### Example 2

**Input:**

```plaintext
pattern = "abba"
s = "dog cat cat fish"
```

**Output:**

```plaintext
false
```

### Example 3

**Input:**

```plaintext
pattern = "aaaa"
s = "dog cat cat dog"
```

**Output:**

```plaintext
false
```

## Constraints

- `1 <= pattern.length <= 300`
- `pattern` contains only lowercase English letters.
- `1 <= s.length <= 3000`
- `s` contains only lowercase English letters and spaces ' '.
- `s` does not contain any leading or trailing spaces.
- All the words in `s` are separated by a single space.

## Approach

1. Split the string `s` into words.
2. Create two mappings:
   - From characters in `pattern` to words in `s`.
   - From words in `s` to characters in `pattern`.
3. Iterate through the characters in `pattern` and the corresponding words in `s`:
   - Check if the current character is already mapped to a word.
   - Check if the current word is already mapped to a character.
   - If either mapping is violated, return `false`.
4. If all mappings are consistent, return `true`.
