const randomHexColor = (num: number) => {
  if (num % 2) return "Negative";
  const hexColorData = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const arr = [];
  for (let i = 0; i < 6; i++) {
    const simbol = Math.floor(Math.random() * 16);
    arr.push(hexColorData[simbol]);
  }
  const color = "#" + arr.join("");
  return color;
};

export default randomHexColor
