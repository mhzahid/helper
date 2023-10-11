export function useFormatNumber(number, decimal = true) {
  const options = {};

  if (decimal) {
    options.roundingPriority = "lessPrecision";
    options.minimumFractionDigits = 2;
    options.minimumSignificantDigits = 2;
  }

  const formatter = new Intl.NumberFormat("en-IN", options);

  return formatter.format(number);
}
