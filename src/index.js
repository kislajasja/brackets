module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let currentSymbolIsOpen = false;
    let currentSymbolIsClose = false;
    let openBracket;
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] === currentSymbol) {
        currentSymbolIsOpen = true;
      }
      if (bracketsConfig[j][1] === currentSymbol) {
        openBracket = bracketsConfig[j][0];
        currentSymbolIsClose = true;
      }
    }
    if (currentSymbolIsOpen && currentSymbolIsClose && stack.length > 0) {
      let topElement = stack[stack.length - 1];
      if (openBracket === topElement) {
        stack.pop();
        continue;
      }
    }
    if (currentSymbolIsOpen) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      if (openBracket === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
