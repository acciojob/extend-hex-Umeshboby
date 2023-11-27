const extendHex = (shortHex) => {
  // write your code here
	 shortHex = shortHex.replace("#", "");

  // Expand shortHex to full hex format
  const fullHex = shortHex
    .split('')
    .map(char => char.repeat(2))
    .join('');

  // Add the # prefix and return
  return "#" + fullHex;
};
	

// // Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

