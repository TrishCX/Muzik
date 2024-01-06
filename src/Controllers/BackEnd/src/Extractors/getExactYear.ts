export function getExactYearFromRelativeString(
  relativeString: string
): number | null {
  if (!relativeString) return null;
  const match = relativeString.match(/(\d+)\s+years? ago/i);

  if (match && match[1]) {
    const currentYear = new Date().getFullYear();
    const yearsAgo = parseInt(match[1], 10);
    const exactYear = currentYear - yearsAgo;

    return exactYear;
  }

  return null; // Return null if the string doesn't match the expected format
}
