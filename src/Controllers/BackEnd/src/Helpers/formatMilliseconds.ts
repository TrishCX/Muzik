export function formatDuration(milliseconds: number): string {
  if (milliseconds < 0) {
    throw new Error("Duration cannot be negative");
  }

  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const formattedHours = hours > 0 ? `${hours}:` : "";
  const formattedMinutes = (minutes % 60).toString().padStart(2, "0");
  const formattedSeconds = (seconds % 60).toString().padStart(2, "0");

  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
}
