function match(closeBracket) {
  if(closeBracket === ')') return '(';
  if(closeBracket === ']') return '[';
  if(closeBracket === '}') return '{';
}

function multiBracketValidation(input) {
  const stack = [];
  for(let i = 0; i < input.length; i++) {
    if('([{'.includes(input[i])) {
      stack.push(input[i]);
    }
    if(')]}'.includes(input[i])) {
      if(stack.pop() !== match(input[i]))
      {
        return false;
      }
    }
  }
  if(stack.length === 0) {
    return true;
  }
  return false;
}

module.exports = multiBracketValidation;
