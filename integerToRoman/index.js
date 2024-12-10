function integerToRoman(num) {
  let result = [];
  let jack = [];
  num = String(num).split("");
  num.forEach((e, i) => result.push(e.padEnd(num.length - i, "0")));
  result.forEach((e, i) => {
    const eNum = Number(e[0]);
    if (e.length === 1) {
      if (e == 9) {
        jack.push("I", "X");
        return;
      }
      if (eNum == 4) {
        jack.push("I", "V");
        return;
      }
      if (eNum > 5) {
        jack.push(
          "V",
          Array(eNum - 5)
            .fill("I")
            .join("")
        );
        return;
      } else {
        jack.push(Array(eNum).fill("I").join(""));
      }
    }
    if (e.length === 2) {
      if (eNum == 9) {
        jack.push("X", "C");
        return;
      }
      if (eNum == 4) {
        jack.push("X", "L");
        return;
      }
      if (eNum >= 5) {
        jack.push(
          "L",
          Array(eNum - 5)
            .fill("X")
            .join("")
        );
        return;
      } else {
        jack.push(Array(eNum).fill("X").join(""));
      }
    }
    if (e.length === 3) {
      if (eNum == 9) {
        jack.push("C", "M");
        return;
      }
      if (eNum == 4) {
        jack.push("C", "D");
        return;
      }
      if (eNum > 5) {
        jack.push(
          "D",
          Array(eNum - 5)
            .fill("C")
            .join("")
        );
        return;
      } else {
        jack.push(Array(eNum).fill("C").join(""));
      }
    }
    if (e.length === 4) {
      jack.push(Array(eNum).fill("M").join(""));
    }
  });
  return jack.join("");
}
console.log(integerToRoman(1994));
