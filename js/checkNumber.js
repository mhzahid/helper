export function useCheckNumberInput(e, decimal = false, value = null) {
  if (!/[\d.]/.test(e.key)) {
    e.preventDefault();
  } else {
    if (decimal) {
      if (e.key === "." && value.includes(".")) {
        e.preventDefault();
      } else {
        return true;
      }
    } else {
      if (e.key === ".") {
        e.preventDefault();
      } else {
        return true;
      }
    }
  }
}
