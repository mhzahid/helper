export function useFormatDate(date, time = false, year = true) {
  const d = new Date(date);

  const options = {
    day: "2-digit",
    month: "short",
  };

  if (time) {
    options.hour12 = true;
    options.hour = "2-digit";
    options.minute = "2-digit";
  }

  if (year) {
    options.year = "numeric";
  }

  const formatter = new Intl.DateTimeFormat("en-IN", options);

  return formatter.format(d);
}
