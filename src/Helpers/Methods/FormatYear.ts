const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export interface DateClass {
  year: number;
  month: number;
  day: number;
  precision: string;
}

export function formatYear(date: DateClass) {
  const formattedDate = `${months[date.month - 1]} ${date.day}, ${date.year}`;
  return formattedDate;
}
