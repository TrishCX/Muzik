export function splitString(input: string): string[] {
  const indexOfParentheses = input.indexOf("(");

  if (indexOfParentheses !== -1) {
    const beforeParentheses = input.substring(0, indexOfParentheses).trim();
    const insideParentheses = input.substring(indexOfParentheses).trim();

    return [beforeParentheses, insideParentheses];
  } else {
    return [input];
  }
}
