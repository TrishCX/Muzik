export function convertMillisecondsToLabel(milliseconds: number): string {
  // Ensure the input is a non-negative number
  if (isNaN(milliseconds) || milliseconds < 0) {
    throw new Error(
      "Invalid input. Please provide a non-negative number of milliseconds."
    );
  }

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

  // Create a formatted label
  const formattedLabel =
    (hours > 0 ? hours + ":" : "") +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  return formattedLabel;
}
