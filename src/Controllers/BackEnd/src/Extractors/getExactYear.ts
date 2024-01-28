import {
  subDays,
  subMonths,
  subYears,
  format,
  subWeeks,
  subHours,
} from "date-fns";

export function getExactYearFromRelativeString(input: string): string {
  if (!input) return;
  const match = input.match(/(\d+)\s+(\w+)/);

  if (!match) {
    throw new Error(
      "Invalid input format. Please use 'X [days|months|years] ago'."
    );
  }

  const value = parseInt(match[1]);
  const label = match[2];

  const currentDate = new Date();
  let newDate: Date;

  switch (label.toLowerCase()) {
    case "days":
      newDate = subDays(currentDate, value);
      break;
    case "months":
      newDate = subMonths(currentDate, value);
      break;
    case "years":
      newDate = subYears(currentDate, value);
      break;
    case "year":
      newDate = subYears(currentDate, value);
      break;

    case "month":
      newDate = subMonths(currentDate, value);
      break;
    case "day":
      newDate = subDays(currentDate, value);
      break;
    case "hours":
      newDate = subHours(currentDate, value);
      break;
    case "hour":
      newDate = subHours(currentDate, value);
      break;

    case "weeks":
      newDate = subWeeks(currentDate, value);
      break;
    case "week":
      newDate = subWeeks(currentDate, value);
      break;
    default:
      throw new Error(
        "Invalid label. Please use 'days', 'months', or 'years'."
      );
  }

  const exactYear = format(newDate, "yyyy");
  return exactYear;
}
